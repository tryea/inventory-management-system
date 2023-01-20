import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: { // Locally preview production build.
    port: 3000
  },
  server: { // watch mode in development environment and run mode in CI automatically
    port: 3000
  }
  
})
