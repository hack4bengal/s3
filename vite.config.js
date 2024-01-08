import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      injectRegister: "auto",
      manifest: {
        short_name: "Hack4Bengal",
        name: "Hack4Bengal",
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        icons: [
          {
            src: "pwalogo.png",
            sizes: "160x160",
            type: "image/png",
            purpose: "maskable any",
          },
         
        ],
      },
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
          {
            urlPattern: new RegExp("^http://localhost:5000/(.*)"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-dev",
              expiration: {
                maxAgeSeconds: 86400,
              },
              cacheableResponse: {
                statuses: [0, 200, 201],
              },
            },
          },
         
         
        ],
      },
    }),
  ],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  watch: {
    usePolling: true,
  },
});
