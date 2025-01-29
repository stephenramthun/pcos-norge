import BaseLayout from "./components/BaseLayout";
import { fontSize, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
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

export const Arsmote2025: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Kjære medlem,
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Velkommen til{" "}
              <Link
                href="https://zoom.us/j/97936436063?pwd=JKUOtvscjDaj95eegkgpPKCoqKsbQa.1"
                target="_blank"
              >
                digitalt årsmøte
              </Link>{" "}
              i PCOS Norge onsdag 12. februar kl 17:30-18:30. Følg lenken for å
              delta i møtet. Møte-ID er 979 3643 6063 og passord er 178478.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <Link href="https://www.pcosnorge.no/arsmote">Her</Link> finner du
              årsmelding med revisorgodkjent regnskap, samt protokoll for møtet.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Saksliste:
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              1. Valg av møteleder
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              2. Valg av protokollvitner
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              3. Valg av referent
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              4. Valg av ansvarlig for opptelling
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              5. Godkjenning av møteinnkalling og saksliste
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              6. Årsrapport og årsregnskap
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              7. Fastsettelse av styrehonorar
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              8. Fastsettelse av årskontingent
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              9. Endringer av vedtekter
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s1}>
              10. Valg av nye styremedlemmer
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              11. Valg av valgkomité
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vel møtt!
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(Arsmote2025 as unknown as { subject: string }).subject =
  "Velkommen til årsmøte";

export default Arsmote2025;
