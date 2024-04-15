import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    appType: "spa",
  };
});
