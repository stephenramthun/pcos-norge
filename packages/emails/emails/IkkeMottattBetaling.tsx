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

export const Agenda: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s10} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>Hei,</Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vi har ikke mottatt årskontingenten din og du meldes derfor nå ut
              av foreningen. Om det har skjedd en glipp eller du har ombestemt
              deg og allikevel ønsker å fortsette å være medlem kan du
              reaktivere ditt medlemsskap på{" "}
              <Link href="https://www.pcosnorge.no/min-side">Min Side</Link>.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Ditt medlemsskap er viktig for oss og vi håper derfor at du ønsker
              bli med oss videre! PCOS Norge er en ung organisasjon som allerede
              har etablert seg som en ambisiøs og seriøs forkjemper for et bedre
              helsetilbud for alle som lever med PCOS. Vi har vært sentrale i
              revideringen av veilederne som i dag brukes for diagnostisering og
              behandling i helsevesenet. Vi har sammen med et forskerteam fått
              offentlige støttemidler til prosjektet LØFT PCOS, som skal utvikle
              et videreutdanningsprogram / digitalt kurs for fastleger og annet
              helsepersonell. Og i slutten av oktober skal vi møte Helseminister
              Jan Christian Vestre på tomannshånd. Vi håper også du vil benytte
              deg av våre likepersonstjeneste og komme i kontakt med andre som
              har diagnosen. Mer om vårt arbeid kan du lese på{" "}
              <Link href="www.pcosnorge.no">www.pcosnorge.no</Link>.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Vårt medlemstall avgjør direkte hvor mye offentlig driftsstøtte vi
              kan motta. Å ha en stor og tydelig pasientgruppe i ryggen gir også
              legitimitet til kampsakene våre og løfter PCOS på agendaen i
              helseforetakene, politisk og i media.
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vi håper du vil være med oss videre!
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Beste hilsen,
            </Text>
            <Text cssClass="p">Styret i PCOS Norge</Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(Agenda as unknown as { subject: string }).subject = "Velkommen til årsmøte";

export default Agenda;
