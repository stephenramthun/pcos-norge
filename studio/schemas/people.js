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
      codegen: { required: true },
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
