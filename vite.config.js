import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

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
