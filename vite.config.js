import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // The events content lives in Airtable behind the production API.
      // Proxying keeps the local site fed with the same data as the live one.
      "/api": {
        target: "https://lesainesdabord.com",
        changeOrigin: true,
      },
    },
  },
});
