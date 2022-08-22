const withPWA = require("next-pwa");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withPWA({
    pwa: {
        dest: "public",
        disable: process.env.ENVIRONMENT === "development" ? true : false,
    },
    images: {
        domains: ["robohash.org"]
    }
});

module.exports = nextConfig;