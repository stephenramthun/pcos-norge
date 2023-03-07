import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { Logo } from "./plugins/studio-logo/logo";
import deskStructure from "./deskStructure";

import schemas from "./schemas";
import resolveProductionUrl from "./resolveProductionUrl";

export const SANITY_PROJECT_ID = "7bmjnb8i"
export const SANITY_DATASET = "production"

export default defineConfig({
  title: "pcos-norge",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  plugins: [deskTool({ structure: deskStructure }), visionTool()],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    // @ts-ignore
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schemas,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  document: {
    productionUrl: async (prev, context) => {
      const { document } = context
      return resolveProductionUrl(document)
    },
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) => templateItem.templateId != "settings"
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === "settings") {
        return prev.filter(
          ({ action }) => !["unpublish", "delete", "duplicate"].includes(action)
        );
      }
      return prev;
    },
  },
});
