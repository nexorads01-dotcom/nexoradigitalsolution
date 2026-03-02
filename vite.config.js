import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages will serve this site at:
// https://nexorads01-dotcom.github.io/nexoradigitalsolution/
// so we set the base path to match the repo name.
export default defineConfig({
  plugins: [react()],
  base: "/nexoradigitalsolution/",
});

