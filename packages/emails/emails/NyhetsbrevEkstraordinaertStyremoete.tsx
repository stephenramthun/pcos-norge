import BaseLayout from "./components/BaseLayout";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import React from "react";
import Link from "./components/Link";
import Paragraph from "./components/Paragraph";
import { SubHeader } from "./components/SubHeader";

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

export const NyhetsbrevEkstraorinaertStyremoete: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              Innkalling til ekstraordinær generalforsamling
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <SubHeader paddingBottom={spacing.s8}>
              Onsdag 10. juni kl 18:00
            </SubHeader>
            <Paragraph paddingBottom={spacing.s8}>
              <strong>Zoom møtelenke:</strong>
              <br />
              <Link href="https://zoom.us/j/95255886939?pwd=0ruX34t0Z5Gw2HDfzJz3vDKzO8D17v.1">
                https://zoom.us/j/95255886939?pwd=0ruX34t0Z5Gw2HDfzJz3vDKzO8D17v.1
              </Link>
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              I henhold til vedtektene paragraf 6 kaller styret inn til
              ekstraordinær generalforsamling. Bakgrunnen for innkallingen er
              behovet for å formelt endre organisasjonens navn etter at nytt
              diagnosenavn ble offentliggjort. Ekstraordinær generalforsamling
              kan kun behandle og ta avgjørelser i de sakene som er kunngjort i
              innkallingen.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              <strong>Saksliste</strong>
              <ol>
                <li>Valg av møteleder</li>
                <li>Valg av protokollvitner</li>
                <li>Valg av referent</li>
                <li>Valg av ansvarlig for digital opptelling</li>
                <li>Godkjenning av møteinnkalling og saksliste</li>
                <li>Navneendring fra PCOS Norge til PMOS Norge</li>
                <li>Endring av vedtekter</li>
              </ol>
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Protokoll for generalforsamlingen og oppdaterte vedtekter finnes{" "}
              <Link href="https://www.pcosnorge.no/generalforsamling-100626">
                her
              </Link>
            </Paragraph>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevEkstraorinaertStyremoete as unknown as { subject: string }).subject =
  "Innkalling til ekstraordinær generalforsamling";

export default NyhetsbrevEkstraorinaertStyremoete;
