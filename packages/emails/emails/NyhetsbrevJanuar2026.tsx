import BaseLayout from "./components/BaseLayout";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Footer from "./components/Footer";
import React from "react";
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

export const NyhetsbrevJanuar2026: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              Snart er det årsmøte – send inn dine forslag til saker!
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Styret gjør seg klar til årsmøte 2026. Det er nå mulig for
              medlemmer å sende inn forslag til saker til årsmøtet. Dersom du
              har en sak du ønsker at behandles ber vi deg først om å lese
              vedtektene og foreningens formål som du finner her:{" "}
              <Link href="https://www.pcosnorge.no/om-oss#vedtekter">
                https://www.pcosnorge.no/om-oss#vedtekter.
              </Link>
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Saker kan sendes til epost{" "}
              <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no</Link>{" "}
              innen 21. januar. For at vi skal kunne behandle saken trenger vi:
              <ul>
                <li>En beskrivelse av hva saken gjelder</li>
                <li>Forslag til en innstilling som årsmøtet kan stemme over</li>
              </ul>
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Årsmøtet 2026 avholdes digitalt torsdag 12. februar kl 19:00. Alle
              medlemmer har møte- og stemmerett i årsmøtet.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Årsmelding med revisorgodkjent regnskap, protokoll og møtelenke
              vil bli sendt ut 14 dager før møtet.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Beste hilsen,
              <br />
              Styret i PCOS Norge v/ Styreleder Emilie Oldervik
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevJanuar2026 as unknown as { subject: string }).subject =
  "Snart er det årsmøte – send inn dine forslag til saker!";

export default NyhetsbrevJanuar2026;
