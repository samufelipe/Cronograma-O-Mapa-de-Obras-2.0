
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 'base: ./' garante que o navegador encontre os arquivos JS e CSS 
  // mesmo que a página esteja dentro de uma pasta como /imersao ou /evento
  base: './',
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
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
