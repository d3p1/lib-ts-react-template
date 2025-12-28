/**
 * @description Layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Metadata} from 'next'
import './css/globals.css'

export const metadata: Metadata = {
  title: 'My Lib',
  description: 'Lib usage example',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen grid place-items-center bg-primary text-secondary">
        {children}
      </body>
    </html>
  )
}
