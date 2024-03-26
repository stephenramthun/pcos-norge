import { Rule } from "sanity";

export const article = {
  name: "article",
  title: "Artikkel",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      description: "En kort tittel",
    },
    {
      name: "ingress",
      title: "Ingress",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      description: "En kort ingress",
    },
    {
      name: "body",
      title: "Innhold",
      type: "blockContent",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      title: "ID",
      type: "slug",
      options: {
        source: "title",
      },
      description: "ID som brukes for lenking til artikkelen",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "published",
      title: "Publisert",
      type: "datetime",
      initialValue: new Date().toISOString(),
      description:
        "Publiseringstidspunkt for artikkelen som vises på nettsiden. Merk at artikkelen publiseres umiddelbart uavhengig av tidspunktet som oppgis.",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "image",
      title: "Bilde",
      type: "imageAsset",
      description: "Bilde som vises i lenker til artikkelen",
      validation: (Rule) =>
        Rule.required().error("Alle artikler må ha et bilde."),
    },
    {
      name: "pageLinks",
      title: "Lenker",
      type: "navigationLinks",
      description:
        "Referanser til artikler det skal lenkes til i bunnen av artikkelen, typisk hvis denne artikkelen er en del av en artikkelserie",
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "openGraphMetaData",
    },
    {
      name: "show",
      title: "Vis lenke til artikkel",
      type: "boolean",
      description:
        "Bestemmer om det skal vises lenke til artikkelen på nettsidene",
      initialValue: true,
    },
  ],
};
