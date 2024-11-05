import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true, // ou use '0.0.0.0' para ouvir todas as interfaces
    port: 5173, // ou a porta desejada
  },
});
