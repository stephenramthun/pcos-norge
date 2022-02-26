export const article = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "ingress",
      title: "Ingress",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "richText",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "published",
      title: "Published",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
}
