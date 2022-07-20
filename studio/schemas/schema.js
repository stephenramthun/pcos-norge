import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import { hero } from "./hero"
import { fact } from "./fact"
import { person } from "./person"
import { article } from "./article"
import { factBox } from "./factBox"
import { bodyText } from "./bodyText"
import { page } from "./page"
import { pageLink } from "./pageLink"
import { callToAction } from "./callToAction"
import { imageAsset } from "./imageAsset"
import { blockContent } from "./blockContent"

export default createSchema({
  name: "schema",
  types: schemaTypes.concat([
    hero,
    article,
    fact,
    factBox,
    bodyText,
    person,
    page,
    pageLink,
    callToAction,
    imageAsset,
    blockContent,
  ]),
})
