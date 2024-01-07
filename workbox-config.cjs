module.exports = {
    cleanupOutdatedCaches: true,
  skipWaiting: true,
  clientsClaim: true,
    globDirectory: "src", // Assuming your generated assets are in the "dist" directory
    globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,gif}"], // Adjust patterns as needed
    swDest: "public/sw.js", // Path to generate the service worker file
    
    importWorkboxFrom: "local",
  };
  