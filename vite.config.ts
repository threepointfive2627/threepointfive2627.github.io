import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for user pages (like threepointfive2627.github.io)
});
