import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const path = id.replace(/\\/g, '/');
          if (path.includes('/lib/seed')) return 'seed-data';
          if (/\/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(path)) {
            return 'vendor-react';
          }
          return undefined;
        },
      },
    },
  },
});
