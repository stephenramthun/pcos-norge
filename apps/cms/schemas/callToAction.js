export const callToAction = {
  type: "object",
  name: "callToAction",
  title: "Call to Action",
  fields: [
    {
      name: "linkText",
      type: "string",
      title: "Link Text",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
        }),
    },
  ],
}
