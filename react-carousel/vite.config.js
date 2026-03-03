import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: "./src/main.jsx",
      formats: ["es"],
      fileName: () => "carousel.js"
    },
    rollupOptions: {
      output: {
        assetFileNames: "carousel.[ext]"
      }
    }
  }
});
