import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Habilita soporte de React (JSX, Fast Refresh, etc.)
})
