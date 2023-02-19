import React from "react"
import { Users } from "phosphor-react"

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
      validation: (Rule) => Rule.required(),
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
      }
    },
  },
}
