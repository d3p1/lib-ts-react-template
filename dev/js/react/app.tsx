/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createRoot} from 'react-dom/client'
import {CanvasMotionCircle} from '@d3p1/lib-ts-react-template/react'

createRoot(document.getElementById('react-root') as HTMLDivElement).render(
  <>
    <h2 className="text-xl font-black mb-2">React</h2>
    <CanvasMotionCircle />
  </>,
)
