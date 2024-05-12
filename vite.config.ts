import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kanban-board",
  server: {
    open: "/kanban-board",
    port: 3000,
  },
});
