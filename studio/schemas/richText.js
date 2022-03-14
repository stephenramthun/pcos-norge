export const richText = {
  title: "Rich text",
  name: "richText",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            blockEditor: {
              icon: () => "L",
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http"],
                  }),
              },
            ],
          },
          {
            title: "Reference Link",
            name: "referenceLink",
            type: "object",
            blockEditor: {
              icon: () => "RL",
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http"],
                  }),
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
    },
    {
      type: "factBox",
    },
  ],
}
