import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    testMatch: ['**/*.test.{js,jsx}'],
    global:true,
    environment:'jsdom',
    setupFiles:"/src/setupTests.js",
  },
})
