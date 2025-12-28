/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        The `app` folder encloses feature-level implementations
 *              that orchestrate components and services to
 *              deliver complete, reusable application features
 */
import {config} from '../etc/config.js'
import Mathy from '../utils/Mathy.js'
import PointerManager from '../services/pointer-manager.js'
import RendererManager from '../services/renderer-manager.js'

export default class App {
  /**
   * @type {HTMLCanvasElement}
   */
  canvas: HTMLCanvasElement

  /**
   * @type {RendererManager}
   */
  #rendererManager: RendererManager

  /**
   * @type {PointerManager}
   */
  #pointerManager: PointerManager

  /**
   * @type {(e: PointerEvent) => void}
   */
  #boundPointerMove: (e: PointerEvent) => void

  /**
   * @type {(e: PointerEvent) => void}
   */
  #boundPointerLeave: () => void

  /**
   * @type {number}
   */
  #animationId: number

  /**
   * Constructor
   *
   * @param {HTMLCanvasElement}  canvas
   * @param {string | undefined} backgroundColor
   * @param {string | undefined} circleColor
   */
  constructor(
    canvas: HTMLCanvasElement,
    backgroundColor?: string,
    circleColor?: string,
  ) {
    this.canvas = canvas
    this.#rendererManager = new RendererManager(
      canvas,
      backgroundColor,
      circleColor,
    )
    this.#pointerManager = new PointerManager()

    this.#initListeners()
    this.#animate()
  }

  /**
   * Dispose
   *
   * @returns {void}
   */
  dispose(): void {
    this.canvas.removeEventListener('pointermove', this.#boundPointerMove)
    this.canvas.removeEventListener('pointerleave', this.#boundPointerLeave)

    if (this.#animationId) {
      cancelAnimationFrame(this.#animationId)
    }
  }

  /**
   * Animate
   *
   * @param   {number} t
   * @returns {void}
   */
  #animate(t: number = 0): void {
    this.#rendererManager.clear()

    const rad = Mathy.lerp(
      config.circle.radius.min,
      config.circle.radius.max,
      (Math.sin(config.circle.radius.movement.frequency * t) + 1) * 0.5,
    )
    this.#rendererManager.drawCircle(this.#pointerManager.pointer, rad)
    this.#animationId = requestAnimationFrame(this.#animate.bind(this))
  }

  /**
   * Init listeners
   *
   * @returns {void}
   */
  #initListeners(): void {
    this.#initPointerMoveListener()
    this.#initPointerLeaveListener()
  }

  /**
   * Init pointer move listener
   *
   * @returns {void}
   */
  #initPointerMoveListener(): void {
    this.#boundPointerMove = (e: PointerEvent) => {
      this.#pointerManager.update(e.offsetX, e.offsetY)
    }

    this.canvas.addEventListener('pointermove', this.#boundPointerMove)
  }

  /**
   * Init pointer leave listener
   *
   * @returns {void}
   */
  #initPointerLeaveListener(): void {
    this.#boundPointerLeave = () => {
      this.#pointerManager.update(null, null)
    }

    this.canvas.addEventListener('pointerleave', this.#boundPointerLeave)
  }
}
