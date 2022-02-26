export const factBox = {
  name: "factBox",
  title: "Fact box",
  type: "object",
  fields: [
    {
      type: "array",
      name: "facts",
      title: "Facts",
      of: [
        {
          type: "fact",
        },
      ],
    },
  ],
}
