import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/nadja_vn_entrega-portafolio/',
  plugins: [react()],
})
