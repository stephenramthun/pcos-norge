import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import { hero } from "./hero"
import { fact } from "./fact"
import { page } from "./page"
import { person } from "./person"
import { people } from "./people"
import { article } from "./article"
import { factBox } from "./factBox"
import { bodyText } from "./bodyText"
import { pageLink } from "./pageLink"
import { pageLinks } from "./pageLinks"
import { imageAsset } from "./imageAsset"
import { callToAction } from "./callToAction"
import { blockContent } from "./blockContent"
import { navigationLinks } from "./navigationLinks"
import { openGraphMetaData } from "./openGraphMetaData"
import { imageDocument } from "./imageDocument"

export default createSchema({
  name: "schema",
  types: schemaTypes.concat([
    page,
    article,
    hero,
    fact,
    person,
    people,
    factBox,
    bodyText,
    pageLink,
    pageLinks,
    imageAsset,
    callToAction,
    blockContent,
    imageDocument,
    navigationLinks,
    openGraphMetaData,
  ]),
})
