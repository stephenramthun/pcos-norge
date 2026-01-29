import BaseLayout from "./components/BaseLayout";
import { fontSize, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Text from "./components/Text";
import Footer from "./components/Footer";
import React from "react";
import Link from "./components/Link";
import Heading from "./components/Heading";

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

export const Arsmote2026: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={600} paddingBottom={spacing.s8}>
              Innkalling til årsmøte i PCOS Norge 2026
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s4}>
              Tid: Torsdag 12. februar kl 19:00-19:45
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Sted: Digitalt via Zoom:{" "}
              <Link href="https://zoom.us/meetings/99584900882/invitations?signature=L5UIOrQVjCUDh3foVbmpx5rbUkAO5hWYaHi4JEA0C7E">
                https://zoom.us/meetings/99584900882/invitations?signature=L5UIOrQVjCUDh3foVbmpx5rbUkAO5hWYaHi4JEA0C7E
              </Link>
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s4}>
              Agenda for møtet:
            </Text>
            <Text cssClass="p">1. Valg av møteleder</Text>
            <Text cssClass="p">2. Valg av protokollvitner</Text>
            <Text cssClass="p">3. Valg av referent</Text>
            <Text cssClass="p">
              4. Valg av ansvarlig for digital opptelling
            </Text>
            <Text cssClass="p">
              5. Godkjenning av møteinnkalling og saksliste
            </Text>
            <Text cssClass="p">6. Årsregnskap og årsrapport</Text>
            <Text cssClass="p">7. Fastsettelse av styrehonorar</Text>
            <Text cssClass="p">8. Fastsettelse av årskontingent</Text>
            <Text cssClass="p">9. Endringer av vedtekter</Text>
            <Text cssClass="p">10. Valg av nye styremedlemmer</Text>
            <Text cssClass="p">11. Signaturrett</Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              12. Innkomne saker
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s4}>
              Du finner årsmelding med årsregnskap, budsjett og revisjon{" "}
              <Link href="https://www.pcosnorge.no/filer/aarsmelding-2025.pdf">
                her.
              </Link>
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Du finner protokoll til årsmøtet med innstillinger{" "}
              <Link href="https://www.pcosnorge.no/filer/protokoll-2026.pdf">
                her.
              </Link>
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vel møtt!
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s11}>
              Vennlig hilsen styret ved Emilie Oldervik
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(Arsmote2026 as unknown as { subject: string }).subject =
  "Velkommen til årsmøte";

export default Arsmote2026;
