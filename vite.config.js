import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import {VitePWA} from "vite-plugin-pwa";


export default defineConfig({
  plugins: [svgr(), react(),VitePWA(
   {
    workbox: {
      // Adjust the globPatterns to match the output folder of your dynamic assets
      globPatterns: ["dist/**/*"],
  },
  includeAssets: [
      // Adjust the includeAssets pattern to match your dynamic assets
      "dist/**/*",
  ],
    manifest: {
      "short_name": "Hack4Bengal",
      "name": "Hack for Bengal App",
      icons: [
        {
            src: "/pwalogo.png",
            type: "image/png",
            sizes: "1024x1024",
            purpose: "maskable any",
            
        }
    ],
    "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"

  }
   }
  )],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  watch: {
    usePolling: true,
  },
});
