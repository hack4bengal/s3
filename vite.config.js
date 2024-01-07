import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import {VitePWA} from "vite-plugin-pwa";


export default defineConfig({
  plugins: [svgr(), react(),VitePWA(
   {
    workbox: {
      cleanupOutdatedCaches: true,
      skipWaiting: true,
      clientsClaim: true,

      runtimeCaching: [
        {
          // Caches Google Fonts with a Cache First strategy.
          urlPattern: new RegExp(
            "^https://fonts.(?:googleapis|gstatic).com/(.*)",
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "google-fonts",
            expiration: {
              maxEntries: 30,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          // Caches images with a Cache First strategy.
          urlPattern: /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 60,
            },
          },
        },
        {
          // serves static resources with a Network First strategy.
          urlPattern: /\.(?:js|css|jsx)$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "static-resources",
            expiration: {
              maxEntries: 60,
            },
          },
        },
        
        
      ],
    },
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
