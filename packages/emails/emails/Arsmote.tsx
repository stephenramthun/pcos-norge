import BaseLayout from "./components/BaseLayout";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Footer from "./components/Footer";
import React from "react";

const style = `
  .p > * {
    font-size: ${fontSize.base}px !important;
  }

  @media (min-width:${screens.xs}) {
    .p > * {
      font-size: ${fontSize.md}px !important;
    }
  }
`;

export const Arsmote: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s10} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              Velkommen til årsmøte i PCOS Norge
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Tirsdag 6. februar kl 19:00
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Møtet foregår digitalt.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Det er mulig å fremme saker til behandling i årsmøtet. Beskrivelse
              av sak og forslag til vedtak må komme styret i hende innen 17.
              januar. Forslag sendes til epost: post@pcosnorge.no.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Årsmelding og agenda sendes ut 14 dager før årsmøtet. Lenke til
              det digitale møtet sendes også ut i forkant.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Ønsker du å stille til valg som styremedlem eller til
              valgkomiteen? Vi trenger nye og utvidede krefter i PCOS Norge og
              søker deg som har lyst å gjøre en forskjell for hele vår
              pasientgruppe. Send en kort presentasjon av deg selv og hva du
              ønsker å bidra med i arbeidet for alle med PCOS, til epost:
              annhelen@pcosnorge.no.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vennlig hilsen,
            </Text>
            <Text cssClass="p">Styret PCOS Norge</Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(Arsmote as unknown as { subject: string }).subject = "Velkommen til årsmøte";

export default Arsmote;
