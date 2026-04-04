import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project URL: https://<user>.github.io/<repo>/
// Set in CI via GITHUB_PAGES_BASE, e.g. /3d-portfolio/
const base = process.env.GITHUB_PAGES_BASE ?? "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});
