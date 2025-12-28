/**
 * @description Hook
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect, useRef} from 'react'
import App from '../../core/app'
import type {MotionCircle} from '../types'

export default function useMotionCircle(props: MotionCircle) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const appRef = useRef<App>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    appRef.current = new App(
      canvasRef.current,
      props.backgroundColor,
      props.circleColor,
    )

    return () => {
      appRef.current?.dispose()
    }
  }, [props.backgroundColor, props.circleColor])

  return {canvasRef}
}
