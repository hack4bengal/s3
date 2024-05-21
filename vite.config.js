import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
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

      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,

        runtimeCaching: [
          {
            urlPattern: new RegExp(
              "^https://fonts.(?:googleapis|gstatic).com/(.*)"
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
            // Cache JS and JSX files with NetworkFirst strategy
            urlPattern: /\.(?:js|jsx)$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "scripts",
              expiration: {
                maxEntries: 60, // Adjust as needed
                // 30 minutes
                maxAgeSeconds: 1800,
              },
            },
          },
          {
            urlPattern: /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 60,
              },
            },
          },
        ],
      },
    }),
  ],
});
