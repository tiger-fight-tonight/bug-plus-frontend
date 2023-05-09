import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        rewrite: path => path.replace('^/api', 'api')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('', 'src')
    }
  }
})
