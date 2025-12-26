/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        The `app` folder encloses feature-level implementations
 *              that orchestrate components and services to
 *              deliver complete, reusable application features
 */
import {config} from '../etc/config.ts'
import Mathy from '../utils/Mathy.js'
import PointerManager from '../services/pointer-manager.ts'
import RendererManager from '../services/renderer-manager.js'

export default class App {
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
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    this.#rendererManager = new RendererManager(canvas)
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
    this.#rendererManager.canvas.removeEventListener(
      'pointermove',
      this.#boundPointerMove,
    )
    this.#rendererManager.canvas.removeEventListener(
      'pointerleave',
      this.#boundPointerLeave,
    )

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

    this.#rendererManager.canvas.addEventListener(
      'pointermove',
      this.#boundPointerMove,
    )
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

    this.#rendererManager.canvas.addEventListener(
      'pointerleave',
      this.#boundPointerLeave,
    )
  }
}
