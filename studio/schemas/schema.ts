import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import { hero } from "./hero"
import { fact } from "./fact"
import { omPcos } from "./omPcos"
import { article } from "./article"
import { factBox } from "./factBox"
import { richText } from "./richText"

export default createSchema({
  name: "schema",
  types: schemaTypes.concat([hero, article, fact, factBox, richText, omPcos]),
})
