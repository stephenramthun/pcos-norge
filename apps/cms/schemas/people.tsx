import { Users } from "phosphor-react";
import { Rule } from "sanity";

export const people = {
  type: "object",
  name: "people",
  title: "Personer",
  fields: [
    {
      type: "array",
      name: "people",
      title: "Personer",
      of: [{ type: "person" }],
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Personer",
        media: (
          <span>
            <Users />
          </span>
        ),
      };
    },
  },
};
