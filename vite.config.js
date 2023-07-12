import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //Cambio de url base a 'OIM', para compatibilidad con github docs.
  base: "/OIM/",
  build: {
    //Cambio de carpeta de output del build a 'docs', para compatibilidad con github docs.
    outDir: "docs",
  },
});
