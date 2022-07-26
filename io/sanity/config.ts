import { ClientConfig } from "next-sanity"

const throwConfigError = (message: string): never => {
  throw Error(message)
}

export const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
    throwConfigError("Missing projectId"),
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",

  /**
   * OPTIONAL config to enable authentication with custom token
   * You might need this if you host the preview on a different url than Sanity Studio
   */
  // token: "<sanity access token>",
  // EventSource: /* provide your own event source implementation. Required in browsers to support the above token parameter. */,
}
