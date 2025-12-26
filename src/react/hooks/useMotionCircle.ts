/**
 * @description Hook
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect, useRef} from 'react'
import App from '../../core/app'

export default function useMotionCircle() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const appRef = useRef<App>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    appRef.current = new App(canvasRef.current)

    return () => {
      appRef.current?.dispose()
    }
  }, [])

  return {canvasRef}
}
