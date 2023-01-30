import { nanoid } from "nanoid"
import { isRequired } from "../helpers/validation"

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
      ...isRequired(),
    },
    {
      type: "imageAsset",
      name: "imageAsset",
      title: "Bildefil",
      ...isRequired(),
    },
    {
      type: "slug",
      name: "id",
      title: "ID",
      options: {
        source: () => nanoid(),
      },
      ...isRequired(),
    },
  ],
}
