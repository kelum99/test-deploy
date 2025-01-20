// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import glsl from 'vite-plugin-glsl'
// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/Sulakshi-Portfolio",
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test-deploy/",
  plugins: [react()],
})
