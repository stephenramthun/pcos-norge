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
      description: "En kort tittel",
    },
    {
      name: "ingress",
      title: "Ingress",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "En kort ingress",
    },
    {
      name: "body",
      title: "Innhold",
      type: "blockContent",
    },
    {
      name: "slug",
      title: "ID",
      type: "slug",
      options: {
        initialValue: "title",
        readOnly: true,
      },
      description: "Autogenerert ID som brukes for lenking til artikkelen",
    },
    {
      name: "published",
      title: "Publisert",
      type: "datetime",
      initialValue: new Date().toISOString(),
      description:
        "Publiseringstidspunkt for artikkelen som vises på nettsiden. Merk at artikkelen publiseres umiddelbart uavhengig av tidspunktet som oppgis.",
    },
    {
      name: "image",
      title: "Bilde",
      type: "imageAsset",
      description: "Bilde som vises i lenker til artikkelen",
    },
  ],
}
