import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    appType: "spa",
    build: {
      outDir: "dist",
      assetsDir: ".",
      rollupOptions: {
        input: "/index.html",
      },
    },
    server: {
      historyApiFallback: true,
    },
  };
});
