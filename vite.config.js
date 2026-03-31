import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  // Use repo subpath only for GitHub Pages, root path elsewhere (e.g. Vercel).
  base:
    process.env.GITHUB_ACTIONS === "true" ? "/nexoradigitalsolution/" : "/",
});

