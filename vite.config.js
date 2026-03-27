import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteStaticCopy from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/MurodovShohruh/',
  plugins: [
    react(),
    ViteStaticCopy({
      targets: [
        { src: 'index.html', dest: '' },
      ]
    })
  ]
})
