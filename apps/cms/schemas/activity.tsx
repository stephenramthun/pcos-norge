import { Rule } from "sanity";

export const activity = {
  name: "activity",
  title: "Aktivitet",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (rule: Rule) => rule.required(),
      description: "En kort tittel som beskriver aktiviteten",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "string",
      description: "En kort beskrivelse av aktiviteten",
    },
    {
      name: "start",
      title: "Start",
      type: "datetime",
      validation: (rule: Rule) => rule.required(),
      description: "Starttidspunkt for aktiviteten",
    },
    {
      name: "end",
      title: "Slutt",
      type: "datetime",
      description: "Sluttidspunkt for aktiviteten",
    },
    {
      name: "location",
      title: "Sted",
      type: "string",
      description:
        "Sted hvor aktiviteten skal holdes, f.eks. en adresse eller digitalt (Zoom)",
    },
    {
      name: "registrationLink",
      title: "Påmelding",
      type: "url",
      description: "En lenke for påmelding dersom påmelding er påkrevd",
    },
    {
      name: "digital",
      title: "Digital",
      type: "boolean",
      description: "Hvis aktiviteten skal holdes digitalt",
      initialValue: false,
    },
    {
      name: "foredrag",
      title: "Foredrag",
      type: "boolean",
      description:
        "Aktiviteten er et foredrag hvor publikum ikke er forventet å delta aktivt, som i f.eks. en samtalegruppe",
      initialValue: false,
    },
  ],
};
