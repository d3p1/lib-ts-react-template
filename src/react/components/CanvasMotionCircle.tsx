/**
 * @description Component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import useMotionCircle from '../hooks/useMotionCircle.ts'

export default function CanvasMotionCircle() {
  const {canvasRef} = useMotionCircle()
  return <canvas ref={canvasRef} />
}
