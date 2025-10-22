import { Rule } from "sanity";

export const likeperson = {
  name: "likeperson",
  title: "Likeperson",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "picture",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "region",
      title: "Område",
      type: "string",
    },
  ],
};
