import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import { hero } from "./hero"
import { richText } from "./richText"
import { article } from "./article"
import { fact } from "./fact"
import { factBox } from "./factBox"

export default createSchema({
  name: "schema",
  types: schemaTypes.concat([hero, richText, article, fact, factBox]),
})
