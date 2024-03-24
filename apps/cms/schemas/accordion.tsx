import { Rule } from "sanity";
import { Rows } from "phosphor-react";

const accordion = {
  name: "accordion",
  title: "Accordion",
  type: "object",
  fields: [
    {
      name: "accordionItems",
      title: "Items",
      type: "array",
      of: [{ type: "accordionItem" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Accordion",
        media: (
          <span>
            <Rows />
          </span>
        ),
      };
    },
  },
};

const accordionItem = {
  name: "accordionItem",
  title: "AccordionItem",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
      validation: (rule: Rule) => rule.required(),
    },
  ],
};

export default [accordionItem, accordion];
