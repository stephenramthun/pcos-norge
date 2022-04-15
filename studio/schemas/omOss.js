export const omOss = {
  name: "omOss",
  title: "Om oss",
  type: "document",
  fields: [
    {
      name: "body",
      title: "Body",
      type: "richText",
    },
    {
      name: "people",
      title: "People",
      type: "array",
      of: [{ type: "person" }],
    },
  ],
}
