import { Rule } from "sanity";

export const newsArticle = {
  name: "newsArticle",
  title: "Nyhetsartikkel",
  type: "document",
  fields: [
    {
      name: "href",
      title: "URL",
      type: "url",
      validation: (rule: Rule) => rule.required(),
      description: "Lenke til nyhetsartikkelen",
    },
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      description: "En kort tittel",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      description:
        "Hva slags type artikkelen er, f.eks. portrett, nyhetsartikkel e.l.",
    },
    {
      name: "kilde",
      title: "Kilde",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      description: "Kilden som har publisert artikkelen, f.eks. VG, NRK e.l.",
    },
    {
      name: "publisert",
      title: "Publisert",
      type: "date",
      description: "Publiseringsdato for artikkelen.",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "image",
      title: "Bilde",
      type: "imageAsset",
      description: "Bilde som vises i lenker til artikkelen",
    },
  ],
};
