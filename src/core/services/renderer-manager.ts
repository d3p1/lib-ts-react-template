/**
 * @description Renderer manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        The `service` folder encloses service modules responsible
 *              for encapsulating business logic, rules, and workflows
 */
import {config} from '../etc/config.js'
import type {Point} from '../types'

export default class RendererManager {
  /**
   * @type {HTMLCanvasElement}
   */
  #canvas: HTMLCanvasElement

  /**
   * @type {CanvasRenderingContext2D}
   */
  #context: CanvasRenderingContext2D

  /**
   * Constructor
   *
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas
    this.#initContext()
  }

  /**
   * Clear
   *
   * @returns {void}
   */
  clear(): void {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
  }

  /**
   * Draw circle
   *
   * @param   {{x: number; y: number}} point
   * @param   {number}                 radius
   * @returns {void}
   */
  drawCircle(
    point: Point,
    radius: number = config.circle.radius.default,
  ): void {
    if (!point.x || !point.y) return

    this.#context.beginPath()
    this.#context.arc(point.x, point.y, radius, 0, 2 * Math.PI)
    this.#context.stroke()
  }

  /**
   * Init context
   *
   * @returns {void}
   */
  #initContext(): void {
    this.#context = this.#canvas.getContext('2d') as CanvasRenderingContext2D
  }
}
