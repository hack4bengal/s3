import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
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
        runtimeCaching: [
          // {
          //   urlPattern: ({ url }) => {
          //     return url.pathname.startsWith("/api");
          //   },
          //   handler: "CacheFirst",
          //   options: {
          //     cacheName: "api-cache",
          //     cacheableResponse: {
          //       statuses: [0, 200],
          //     },
          //   },
          // },
          {
            urlPattern: /\.(png|jpg|jpeg|svg|gif)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Add more patterns for other asset types if needed
          // {
          //   urlPattern: /\.(css|js)$/i,
          //   handler: "StaleWhileRevalidate",
          //   options: {
          //     cacheName: "css-js-cache",
          //   },
          // },
        ],
      },
    }),
  ],
});
