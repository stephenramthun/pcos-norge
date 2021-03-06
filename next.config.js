/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["cdn.sanity.io"],
  },
  productionBrowserSourceMaps: true,
}
