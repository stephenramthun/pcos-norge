import { Rule } from "sanity";

export const sideMedInnholdsfortegnelse = {
  name: "tableOfContentsPage",
  title: "Side med innholdsfortegnelse",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (rule: Rule) =>
        rule.required().error("Alle sider må ha en sidetittel"),
    },
    {
      name: "elements",
      title: "Elementer",
      type: "array",
      of: [{ type: "innhold" }],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "id",
      title: "ID",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
  ],
};
