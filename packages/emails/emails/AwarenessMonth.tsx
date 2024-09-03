import BaseLayout from "./components/BaseLayout";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Footer from "./components/Footer";
import React from "react";
import { SubHeader } from "./components/SubHeader";
import Link from "./components/Link";

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
              September er PCOS Awareness Month!
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              PCOS Norge setter denne måneden ekstra fokus på diagnosen gjennom
              en rekke aktiviteter og tilbud til pasientgruppen. Følg PCOS Norge
              på Facebook og på instagram-kontoen @pcosnorge, for daglig
              oppdatering og de viktigste nyhetene fra oss.
            </Text>
            <SubHeader>Kvinner i fokus på Bergen Kvinnehelsehus</SubHeader>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              I dag, 3. september, arrangerer Bergen Sanitetsforening i
              samarbeid med PCOS Norge og professor Eszter Vanky arrangementet{" "}
              <Link
                href="https://www.facebook.com/events/425618323142837/"
                target="_blank"
              >
                Myter og fakta om PCOS : en glemt kvinnesykdom
              </Link>
              . Arrangementet holdes på Kvinnehelsehuset i Bergen i Sandbrogaten
              5, kl. 18:00-19:30. Arrangementet er gratis og åpent for alle.
            </Text>
            <SubHeader>PCOS Norge utvider vår likepersonstjeneste</SubHeader>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Personer med PCOS har et stort behov for å komme sammen og snakke
              med andre som lever med de samme utfordringene i hverdagen. Vi i
              PCOS Norge har gledet oss lenge til å utvide vår
              likepersonstjeneste! En likeperson er en samtalepartner med samme
              diagnose som man kan dele erfaringer med. En likeperson gir ikke
              medisinske råd og er ingen terapeut, men en samtalepartner i
              hverdagens utfordringer.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              PCOS Norge tilbyr en rekke likepersonsaktiviteter: fysiske og
              digitale samtalegrupper, treff og en-til-en-samtaler. Les mer på{" "}
              <Link
                href="https://www.pcosnorge.no/aktuelt/vi-utvider-var-likepersonstjeneste"
                target="_blank"
              >
                nettsidene våre
              </Link>
              .
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(Arsmote as unknown as { subject: string }).subject = "Velkommen til årsmøte";

export default Arsmote;
