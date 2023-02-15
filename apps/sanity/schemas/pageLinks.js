import React from "react"
import { Link } from "phosphor-react"

export const pageLinks = {
  type: "object",
  name: "pageLinks",
  title: "Sidelenker",
  fields: [
    {
      type: "array",
      name: "links",
      title: "Lenker",
      of: [{ type: "pageLink" }],
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
    },
  ],
  preview: {
    select: {
      links: "links",
    },
    prepare({ links }) {
      return {
        title: "Sidelenker",
        subtitle: links.map((it) => it.title).join(" - "),
        media: (
          <span>
            <Link />
          </span>
        ),
      }
    },
  },
}
