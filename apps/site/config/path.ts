const URLS = {
  preview: "https://preview.pcosnorge.no",
  production: "https://www.pcosnorge.no",
  dev: "http://localhost:3000",
}

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") {
    return URLS.dev
  }
  if (process.env.VERCEL_ENV === "preview") {
    return URLS.preview
  }
  return URLS.production
}
