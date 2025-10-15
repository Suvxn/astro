import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env': {}
  },
  server: {
    port: 5173
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: '/index.html'
    }
  }
})
