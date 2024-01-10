import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
       manifest:{
        icons:[
          {src : "/pwalogo.png",
          sizes:"160x160" , 
          type:"image/png",
          purpose:"any maskable"
        },
        ]
       }
  })],
});
