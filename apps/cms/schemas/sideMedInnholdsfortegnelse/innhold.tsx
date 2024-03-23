import { PreviewValue, Rule } from "sanity";

export const innhold = {
  title: "Innhold",
  name: "innhold",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "content",
      title: "Innhold",
      type: "blockContent",
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: (value: PreviewValue) => ({
      title: value.title,
    }),
  },
};
