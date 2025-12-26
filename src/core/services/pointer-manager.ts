/**
 * @description Pointer manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @note        The `service` folder encloses service modules responsible
 *              for encapsulating business logic, rules, and workflows
 * @note        This pointer manager implementation is just to illustrate
 *              the idea of services/managers and how they are orchestrated by
 *              the app, but it is not necessary for this implementation
 */
import type {Point} from '../types'

export default class PointerManager {
  /**
   * @type {{x: number | null; y: number | null}}
   */
  pointer: Point

  /**
   * Constructor
   */
  constructor() {
    this.pointer = {x: null, y: null}
  }

  /**
   * Update
   *
   * @param   {number | null} x
   * @param   {number | null} y
   * @returns {void}
   */
  update(x: number | null, y: number | null): void {
    this.pointer = {x, y}
  }
}
