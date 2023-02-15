import React from "react"
import { Confetti } from "phosphor-react"

export const hero = {
  type: "object",
  title: "Hero",
  name: "hero",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      title: "Lenkeknapp",
      name: "linkButton",
      type: "callToAction",
    },
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title: title,
        media: (
          <span>
            <Confetti />
          </span>
        ),
      }
    },
  },
}
