/**
 * @description Component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import useMotionCircle from '../hooks/useMotionCircle.js'
import type {MotionCircle} from '../types'

export default function CanvasMotionCircle(props: MotionCircle) {
  const {canvasRef} = useMotionCircle({
    backgroundColor: props.backgroundColor,
    circleColor: props.circleColor,
  })
  return <canvas ref={canvasRef} />
}
