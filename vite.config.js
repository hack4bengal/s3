import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: "Hack4Bengal",
        name: "Hack4Bengal",
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        icons: [
          {
            src: "/pwalogo.png",
            sizes: "160x160",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      injectManifest: {
        swSrc: "src/sw.js", // Relative path to your sw.js file
      },
    }),
  ],
});
