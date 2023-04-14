const URLS = {
  production: "https://admin.pcosnorge.no",
  dev: "http://localhost:4000",
}

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") {
    return URLS.dev
  }
  return URLS.production
}
