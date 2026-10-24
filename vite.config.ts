import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(),
	viteStaticCopy({
		targets: [
		  {
			src: 'src/assets/*',
			dest: 'src/assets/',
		  }
		]
	  })
  ],
  server: {
    host: true,
    port: 8000
  },
  preview: {
	host: true,
	port: 8000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp']
})
