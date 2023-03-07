import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "./resolveProductionUrl";

export const getDefaultDocumentNode = (S) =>
  S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title("Preview"),
  ]);

const component = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("article"),
      S.documentTypeListItem("page"),
      S.documentTypeListItem("imageDocument"),
    ]);

export default component;
