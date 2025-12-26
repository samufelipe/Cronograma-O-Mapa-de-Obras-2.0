
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Definindo como './' para garantir que os caminhos sejam relativos e as imagens carreguem
  base: './', 
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
        },
      },
    },
  }
});
