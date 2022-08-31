export const article = {
  name: "article",
  title: "Artikkel",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description: "En kort tittel",
    },
    {
      name: "ingress",
      title: "Ingress",
      type: "string",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description: "En kort ingress",
    },
    {
      name: "body",
      title: "Innhold",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "slug",
      title: "ID",
      type: "slug",
      options: {
        source: "title",
      },
      description: "ID som brukes for lenking til artikkelen",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "published",
      title: "Publisert",
      type: "datetime",
      initialValue: new Date().toISOString(),
      description:
        "Publiseringstidspunkt for artikkelen som vises på nettsiden. Merk at artikkelen publiseres umiddelbart uavhengig av tidspunktet som oppgis.",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
    {
      name: "image",
      title: "Bilde",
      type: "imageAsset",
      description: "Bilde som vises i lenker til artikkelen",
      validation: (Rule) =>
        Rule.required().error("Alle artikler må ha et bilde."),
      codegen: { required: true },
    },
  ],
}
