export const imageAsset = {
  type: "image",
  name: "imageAsset",
  title: "Bilde",
  fields: [
    {
      type: "string",
      name: "alt",
      title: "Alt",
      validation: (Rule) =>
        Rule.required().error("Alle bilder må ha en beskrivende tekst"),
      codegen: { required: true },
    },
  ],
}
