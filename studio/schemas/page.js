export const page = {
  title: "Side",
  name: "page",
  type: "document",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Tittel",
      validation: (Rule) =>
        Rule.required().error("Alle sider må ha en sidetittel"),
    },
    {
      type: "array",
      name: "elements",
      title: "Elementer",
      of: [
        { type: "hero" },
        { type: "pageLink" },
        { type: "imageAsset" },
        { type: "factBox" },
        { type: "bodyText" },
        { type: "people" },
      ],
    },
    {
      name: "id",
      title: "ID",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
