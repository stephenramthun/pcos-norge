import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import { hero } from "./hero"
import { blockContent } from "./blockContent"
import { article } from "./article"

export default createSchema({
  name: "schema",
  types: schemaTypes.concat([hero, blockContent, article]),
})
