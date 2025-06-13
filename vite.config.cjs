const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5180,
    strictPort: true,
    host: true
  },
  css: {
    postcss: './postcss.config.cjs',
  },
}) 