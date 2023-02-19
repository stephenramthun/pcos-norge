/** @type {import('next').NextConfig} */

const { withAxiom } = require("next-axiom")

const withTM = require("next-transpile-modules")(["db", "emails"])

module.exports = withTM(
  withAxiom({
    reactStrictMode: true,
    images: {
      loader: "custom",
      domains: ["cdn.sanity.io"],
    },
    productionBrowserSourceMaps: true,
    webpack: (config) => {
      config.experiments = config.experiments || {}
      config.experiments.topLevelAwait = true
      return config
    },
  }),
)
