import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   manifest: {
    //     short_name: "Hack4Bengal",
    //     name: "Hack4Bengal",
    //     start_url: ".",
    //     display: "standalone",
    //     theme_color: "#000000",
    //     background_color: "#ffffff",
    //     icons: [
    //       {
    //         src: "/pwalogo.png",
    //         sizes: "160x160",
    //         type: "image/png",
    //         purpose: "any maskable",
    //       },
    //     ],
    //   },
    // }),
  ],
});
