// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "short_name": "Hack4Bengal",
        "name": "Hack for Bengal App",
        "icons": [
          {
              "src": "/pwalogo.png",
              "type": "image/png",
              "sizes": "1024x1024"
          }
      ],
      "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff"
  
      },
      generateSW: {
        // Cache assets from the 'src' folder, including images and subdirectories
        globPatterns: [
          '**/*.{js,css,html}', 
          'src/**/*.{js,jsx,ts,tsx,css}',
          'src/**/*.png', // Include PNG files from subdirectories
          'src/**/*.jpg', // Include JPG files from subdirectories
          'src/**/*.jpeg', // Include JPEG files from subdirectories
          'src/**/*.gif', // Include GIF files from subdirectories
          'src/**/*.webp', // Include WebP files from subdirectories
        ],
        // Additional configuration for Workbox GenerateSW
        // You can customize the cacheId, skipWaiting, clientsClaim, etc.
        // See: https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config
      },
    }),
  ],
  // Other Vite configurations
});
