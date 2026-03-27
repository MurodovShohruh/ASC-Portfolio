import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'  // 👈 3.x uchun named import

export default defineConfig({
  base: '/asc-portfolio/',  // GitHub Pages repo nomi
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'index.html', dest: '' }, // React Router uchun 404 muammosi
      ]
    })
  ]
})