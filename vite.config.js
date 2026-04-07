import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    host: "localhost",
    port: 5174,
=======
    host: "192.168.0.101",
    port: 5173,
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1
  }
 
})
