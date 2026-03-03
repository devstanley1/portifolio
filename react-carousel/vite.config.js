import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "../assets/carousel"),
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "ProjectsCarousel",
      formats: ["iife"],
      fileName: () => "carousel.js"
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "carousel.css";
          }
          return "[name][extname]";
        }
      }
    }
  }
});
