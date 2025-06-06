// Purpose: Vite configuration
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      ouput: {
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  server: {
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});