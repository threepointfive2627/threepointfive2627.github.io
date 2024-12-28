import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // Correct base path for your user GitHub Pages (threepointfive2627.github.io)
});
