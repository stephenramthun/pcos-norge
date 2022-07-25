import React from "react"
import { Pencil } from "phosphor-react"

export const bodyText = {
  title: "Brødtekst",
  name: "bodyText",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Innhold",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
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
      }
    },
  },
}
