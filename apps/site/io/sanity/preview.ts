import createImageUrlBuilder from "@sanity/image-url"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import {
  createCurrentUserHook,
  createPreviewSubscriptionHook,
} from "next-sanity"

import { config } from "./config"

export const urlFor = (source: SanityImageSource): ImageUrlBuilder =>
  createImageUrlBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)
