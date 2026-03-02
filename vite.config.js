import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Pages will serve this site at:
// https://nexorads01-dotcom.github.io/nexoradigitalsolution/
// so we set the base path to match the repo name.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: use your repo name here
  base: "/nexoradigitalsolution/",
});

