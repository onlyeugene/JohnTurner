import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://timbu-get-all-products.reavdev.workers.dev/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    // proxy: {
    //   '/api': {
    //     target: 'https://timbu-get-single-product.reavdev.workers.dev/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  plugins: [react()],
});