import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        playground: resolve(__dirname, "grid-playground.html"),
        glyphs: resolve(__dirname, "glyph-browser.html"),
      },
    },
  },
});
