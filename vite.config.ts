import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    allowedHosts: true
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false
  }
})