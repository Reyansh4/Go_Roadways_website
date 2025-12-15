import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  build: {
    copyPublicDir: true,
  },
  // server: {
  //   host: true, // Allow access from network (mobile devices)
  //   port: 5173, // Default Vite port
  // },
});
