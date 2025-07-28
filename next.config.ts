// next.config.js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  // أي إعدادات إضافية عندك
};

module.exports = withPWA(nextConfig);
