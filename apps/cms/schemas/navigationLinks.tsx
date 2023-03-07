import { Link } from "phosphor-react";

export const navigationLinks = {
  name: "navigationLinks",
  title: "Lenker",
  type: "object",
  fields: [
    {
      type: "reference",
      name: "leftLink",
      title: "Venstrelenke",
      to: [{ type: "article" }],
    },
    {
      type: "reference",
      name: "rightLink",
      title: "Høyrelenke",
      to: [{ type: "article" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Lenker",
        media: (
          <span>
            <Link />
            <Link />
          </span>
        ),
      };
    },
  },
};
