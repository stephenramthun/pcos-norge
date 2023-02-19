import React from "react"
import { Question } from "phosphor-react"

export const fact = {
  type: "object",
  name: "fact",
  title: "Fakta",
  fields: [
    {
      type: "string",
      name: "question",
      title: "Spørsmål",
    },
    {
      type: "string",
      name: "answer",
      title: "Svar",
    },
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
        media: (
          <span>
            <Question />
          </span>
        ),
      }
    },
  },
}
