/** @type {import('next').NextConfig} */

const { withAxiom } = require("next-axiom")

module.exports = withAxiom({
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["cdn.sanity.io"],
  },
  productionBrowserSourceMaps: true,
  transpilePackages: ["db", "emails"],
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    return config
  },
})
