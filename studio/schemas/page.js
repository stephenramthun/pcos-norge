export const page = {
  name: "page",
  title: "Side",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Alle sider må ha en sidetittel"),
      codegen: { required: true },
    },
    {
      name: "elements",
      title: "Elementer",
      type: "array",
      of: [
        { type: "hero" },
        { type: "pageLinks" },
        { type: "imageAsset" },
        { type: "factBox" },
        { type: "bodyText" },
        { type: "people" },
      ],
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
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
      codegen: { required: true },
    },
  ],
}
