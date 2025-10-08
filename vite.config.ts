import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    open: false,
    hot: true,
  },
  preview: {
    port: 5000,
    host: true,
    open: false,
    hot: true
  },
  base: '/my-cv/',
})