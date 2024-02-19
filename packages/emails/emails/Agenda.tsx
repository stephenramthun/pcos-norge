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

export const Agenda: React.FC = () => {
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
              Agendaen inneholder alle sakene som skal behandles på årsmøtet.
              Styret håper du leser gjennom dokumentet og viser din interesse
              ved å delta på årsmøtet.
            </Text>
            <Text
              cssClass="p"
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s8}
            >
              Årsmøtet avholdes digitalt tirsdag 6. februar kl. 19:00.
            </Text>

            <SubHeader>Hvordan deltar du digitalt?</SubHeader>
            <Text cssClass="p">
              Bruk møtelenken under for å delta digitalt:
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <Link href="https://usn.zoom.us/j/67730924884?pwd=QTVkVGx1K1ZFR21xMnh6RXFkaG9tZz09">
                https://usn.zoom.us/j/67730924884?pwd=QTVkVGx1K1ZFR21xMnh6RXFkaG9tZz09
              </Link>
            </Text>

            <SubHeader>Hvem kan stemme på årsmøtet?</SubHeader>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Alle medlemmer har rett til å stemme på årsmøtet. Én stemme avgis
              per medlem. Avstemningen foregår digitalt under årsmøtet. Du kan
              kun benytte stemmeretten din om du deltar i det digitale møtet.
            </Text>

            <SubHeader>Saker til behandling</SubHeader>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <ol>
                <li>
                  <Text cssClass="p">Valg av møteleder</Text>
                </li>
                <li>
                  <Text cssClass="p">Valg av protokollvitner</Text>
                </li>
                <li>
                  <Text cssClass="p">Valg av referent</Text>
                </li>
                <li>
                  <Text cssClass="p">Valg av ansvarlige for opptelling</Text>
                </li>
                <li>
                  <Text cssClass="p">Godkjenning av møteinnkallingen</Text>
                </li>
                <li>
                  <Text cssClass="p">Årsrapport og årsregnskap</Text>
                </li>
                <li>
                  <Text cssClass="p">Fastsettelse av styrehonorar</Text>
                </li>
                <li>
                  <Text cssClass="p">Fastsettelse av årskontingent</Text>
                </li>
                <li>
                  <Text cssClass="p">Endring av vedtekter</Text>
                </li>
                <li>
                  <Text cssClass="p">Valg av nye styremedlemmer</Text>
                </li>
                <li>
                  <Text cssClass="p">Valg av valgkomité</Text>
                </li>
              </ol>
            </Text>

            <SubHeader>Vedlegg</SubHeader>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Årsmelding og årsregnskap til vedtak under punkt 6. Vedtekter til
              vedtak under punkt 9.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Vedlegg finner du ved å gå til{" "}
              <Link href="https://www.pcosnorge.no/vedlegg-2024">
                www.pcosnorge.no/vedlegg-2024
              </Link>
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
(Agenda as unknown as { subject: string }).subject = "Velkommen til årsmøte";

export default Agenda;
