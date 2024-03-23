import { Rule } from "sanity";

export const person = {
  name: "person",
  title: "Person",
  type: "object",
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
      name: "email",
      title: "Epost",
      type: "email",
    },
    {
      name: "role",
      title: "Rolle",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
  ],
};
