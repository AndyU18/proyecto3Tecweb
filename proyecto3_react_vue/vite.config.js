import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        includePaths: ['node_modules/slick-carousel/slick'], // Agrega la ruta de slick-carousel
      },
    },
  },
});
