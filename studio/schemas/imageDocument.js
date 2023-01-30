import { nanoid } from "nanoid"

export const imageDocument = {
  type: "document",
  name: "imageDocument",
  title: "Bilde",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Tittel",
      initialValue: () => nanoid(),
      validation: (Rule) => Rule.required(),
    },
    {
      type: "imageAsset",
      name: "imageAsset",
      title: "Bildefil",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "slug",
      name: "id",
      title: "ID",
      options: {
        source: () => nanoid(),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
