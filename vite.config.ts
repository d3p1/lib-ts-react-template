import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  build: {
    lib: {
      entry: {
        core: resolve(__dirname, 'src/core/index.ts'),
        react: resolve(__dirname, 'src/react/index.ts'),
      },
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
      exclude: ['node_modules/**', 'dev/**'],
    }),
  ],
})
