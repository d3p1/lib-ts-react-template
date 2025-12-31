import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lib-ts-react-template',
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
