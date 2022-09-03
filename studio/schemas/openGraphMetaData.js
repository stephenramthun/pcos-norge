export const openGraphMetaData = {
  name: "openGraphMetaData",
  title: "Metadata",
  type: "object",
  description:
    "Brukes for å legge til innhold i lenker som deles på sosiale medier",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description: "En kort tittel",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "string",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description: "En kort beskrivelse av innholdet i lenka",
    },
    {
      name: "image",
      title: "Bilde",
      type: "imageAsset",
      validation: (Rule) => Rule.required(),
      codegen: { required: true },
      description:
        "Bilde som vises i lenke-previewen av siden. Bør være 1200 x 630 piklser i størrelse.",
    },
  ],
}
