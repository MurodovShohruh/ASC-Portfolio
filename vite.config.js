import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/MurodovShohruh/',  // 👈 GitHub Pages repo nomiga mos
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'index.html', dest: '' }, // React Router uchun 404 muammosi
      ]
    })
  ],
  build: {
    outDir: 'dist'
  }
})