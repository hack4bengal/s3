module.exports = {
    cleanupOutdatedCaches: true,
  skipWaiting: true,
  clientsClaim: true,
    globDirectory: "src", 
    globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,gif}"], 
    swDest: "public/sw.js", 
    
    importWorkboxFrom: "local",
  };
  