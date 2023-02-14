import React from "react"
import { ListBullets } from "phosphor-react"

export const factBox = {
  name: "factBox",
  title: "Faktaboks",
  type: "object",
  fields: [
    {
      type: "array",
      name: "facts",
      title: "Fakta",
      of: [
        {
          type: "fact",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Faktaboks",
        media: (
          <span>
            <ListBullets />
          </span>
        ),
      }
    },
  },
}
