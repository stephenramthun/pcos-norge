/** @type {import('next').NextConfig} */

const { withAxiom } = require("next-axiom")

module.exports = withAxiom({
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["cdn.sanity.io"],
  },
  productionBrowserSourceMaps: true,
})
