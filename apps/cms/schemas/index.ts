import { hero } from "./hero";
import { fact } from "./fact";
import { page } from "./page";
import { person } from "./person";
import { people } from "./people";
import { article } from "./article";
import { factBox } from "./factBox";
import { bodyText } from "./bodyText";
import { pageLink } from "./pageLink";
import { pageLinks } from "./pageLinks";
import { imageAsset } from "./imageAsset";
import { newsArticle } from "./newsArticle";
import { callToAction } from "./callToAction";
import { blockContent } from "./blockContent";
import { imageDocument } from "./imageDocument";
import { navigationLinks } from "./navigationLinks";
import { openGraphMetaData } from "./openGraphMetaData";
import sideMedInnholdsfortegnelse from "./sideMedInnholdsfortegnelse";
import accordion from "./accordion";
import { activity } from "./activity";
import { likeperson } from "./likeperson";

export default [
  page,
  hero,
  fact,
  person,
  people,
  article,
  factBox,
  bodyText,
  pageLink,
  pageLinks,
  imageAsset,
  newsArticle,
  callToAction,
  blockContent,
  imageDocument,
  navigationLinks,
  openGraphMetaData,
  activity,
  ...sideMedInnholdsfortegnelse,
  ...accordion,
  likeperson,
];
