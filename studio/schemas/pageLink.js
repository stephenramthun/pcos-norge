import React from "react"
import { Link } from "phosphor-react"

export const pageLink = {
  title: "Sidelenke",
  name: "pageLink",
  type: "object",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "string",
      name: "ingress",
      title: "Ingress",
    },
    {
      type: "callToAction",
      name: "callToAction",
      title: "Link",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "callToAction.url",
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
        media: (
          <span>
            <Link />
          </span>
        ),
      }
    },
  },
}
