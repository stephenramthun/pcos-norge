import { Rule } from "sanity";

export const blockContent = {
  name: "blockContent",
  title: "Innhold",
  type: "array",
  of: [
    {
      type: "imageAsset",
    },
    {
      type: "factBox",
    },
    {
      type: "people",
    },
    {
      type: "block",
      marks: {
        decorators: [
          {
            title: "Ingress",
            value: "ingress",
            icon: () => "Ing",
            component: () => "Ing",
          },
          {
            title: "Strong",
            value: "strong",
          },
          {
            title: "Emphasis",
            value: "em",
          },
        ],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            icon: () => "L",
            component: () => "L",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (rule: Rule) =>
                  rule.uri({
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
            icon: () => "RL",
            component: () => "RL",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (rule: Rule) =>
                  rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http"],
                  }),
              },
            ],
          },
        ],
      },
    },
  ],
};
