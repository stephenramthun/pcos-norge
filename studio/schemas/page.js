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
      codegen: { required: true },
    },
    {
      type: "array",
      name: "elements",
      title: "Elementer",
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
