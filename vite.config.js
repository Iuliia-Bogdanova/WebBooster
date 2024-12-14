import { defineConfig } from "vite";

export default defineConfig({
  build: {
    base: "/iuliia-bogdanova/", // имя репозитория
    outDir: "docs", // папка для сборки и последующего деплоя на github
    emptyOutDir: true, // очистка папки перед сборкой
  },
});
