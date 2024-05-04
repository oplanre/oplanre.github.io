import { defineConfig } from "vite";
export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    cssMinify: true,
    lib: false
  },
});
