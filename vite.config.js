// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import url from '@rollup/plugin-url'

export default defineConfig({
 plugins: [
 react(),
 url({
   limit: 0, // Todos los archivos serán importados como URLs
   include: ['**/*.mp4'], 
 }),
 ],
 build: {
   rollupOptions: {
     input: '/index.html',
   },
  },
 css: {
 postcss: {
   plugins: [
     tailwindcss('./tailwind.config.js'),
     autoprefixer,
   ],
 },
 },
 publicDir: 'public',
});
