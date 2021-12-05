import sanityClient from "@sanity/client"

export const client = sanityClient({
  projectId: "7bmjnb8i",
  dataset: "production",
  apiVersion: "2021-10-12",
  useCdn: true,
})
