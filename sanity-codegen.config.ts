import { SanityCodegenConfig } from "sanity-codegen"

const config: SanityCodegenConfig = {
  schemaPath: "./studio/schemas/schema.js",
  outputPath: "./types/schema.ts",
}

export default config
