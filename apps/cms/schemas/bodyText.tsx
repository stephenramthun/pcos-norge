import { Pencil } from "phosphor-react";
import { isRequired } from "../helpers/validation";

export const bodyText = {
  title: "Brødtekst",
  name: "bodyText",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Innhold",
      type: "blockContent",
      ...isRequired(),
    },
  ],
  preview: {
    select: {
      title: "content",
    },
    prepare({ title }) {
      return {
        title: title?.[0]?.children?.[0]?.text ?? "Body text",
        media: (
          <span>
            <Pencil />
          </span>
        ),
      };
    },
  },
};
