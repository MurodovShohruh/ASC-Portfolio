export default defineConfig({
  base: '/asc-portfolio/',
  build: {
    outDir: 'dist', // 👈 bu folder GitHub Actions topishi kerak
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'index.html', dest: '' },
      ]
    })
  ]
})