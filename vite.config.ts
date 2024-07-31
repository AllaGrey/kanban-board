import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [react(), vercel()],
  base: "/kanban-board/",
  server: {
    open: "/kanban-board/",
    port: 3000,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
