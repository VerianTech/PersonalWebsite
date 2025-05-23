import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  base: "/PersonalWebsite/",
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
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp']
})
