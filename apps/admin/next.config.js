/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["cdn.sanity.io"],
  },
  pageExtensions: ["page.tsx", "route.tsx", "route.ts"],
  productionBrowserSourceMaps: true,
  transpilePackages: ["db", "emails"],
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    return config
  },
}
