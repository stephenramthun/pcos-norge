import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "./resolveProductionUrl";
import { StructureBuilder } from "sanity/lib/exports/desk";

export const getDefaultDocumentNode = (builder: StructureBuilder) =>
  builder.document().views([
    builder.view.form(),
    builder.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title("Preview"),
  ]);

const component = (builder: StructureBuilder) =>
  builder
    .list()
    .title("Content")
    .items([
      builder.documentTypeListItem("article"),
      builder.documentTypeListItem("page"),
      builder.documentTypeListItem("imageDocument"),
      builder.documentTypeListItem("tableOfContentsPage"),
      builder.documentTypeListItem("newsArticle"),
    ]);

export default component;
