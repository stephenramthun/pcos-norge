import {
  createCurrentUserHook,
  createPreviewSubscriptionHook,
} from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

import { config } from "./config"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"

export const urlFor = (source: SanityImageSource): ImageUrlBuilder =>
  createImageUrlBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)
