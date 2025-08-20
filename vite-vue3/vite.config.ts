import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

import elementComps from "./src/plugins/element.export.ts"
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue(), ...elementComps],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "router": path.resolve(__dirname, "src/router"),
      "store": path.resolve(__dirname, "src/store"),
      "layout": path.resolve(__dirname, "src/layout"),
      "views": path.resolve(__dirname, "src/views"),
      "components": path.resolve(__dirname, "src/components"),
    }
  },

  build: {
    rollupOptions: {
      output: {
        // 按组件模块分块
        manualChunks: {
          "group-login": ["./src/views/Login"],
          "group-layout": ["./src/layout"],
          "group-common-components": ["./src/components/*"]
        }
      }
    }
  }
})
