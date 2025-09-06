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

export const NBAwarenessMonth: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              Mandag starter PCOS Awarness Month – bli med på foredrag!
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              PCOS revidert
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Velkommen til gratis temamøte med gynekolog Sigrid V. Pethick om
              PCOS på Kvinnehelsehus Oslo.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Gynekolog Sigrid V. Pethick vil snakke om PCOS med utgangspunkt i
              nylig reviderte internasjonale og nasjonale retningslinjer for
              oppfølging og behandling. Kanskje er det aspekter ved
              diagnostisering, symptombilde eller behandling du ikke visste om?
              Sigrid V. Pethick guider oss gjennom det nyeste av evidensbasert
              kunnskap som er implementert i behandlingstilbudet i dag.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Dette arrangementet er en del av PCOS Awareness Month. Hvert år i
              september settes det ekstra fokus på å øke bevissthet og kunnskap
              om det å leve med diagnosen PCOS.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Gynekolog Sigrid V. Pethick er lege og spesialist i gynekologi og
              fødselshjelp og jobber i dag ved Gynekologklinikken i Drammen.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Arrangementet holdes i Kvinnehelsehus Oslo, Hagegata 32 (5. etasje
              på Tøyenhelsa H32).
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Lett bevertning. Vel møtt!
            </Text>
            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Spør Professor Eszter Vanky om PCOS!
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Velkommen til digitalt arrangement med Professor Eszter Vanky!
              Torsdag 4. september kl 19:00 besvarer hun spørsmål om PCOS fra
              oss pasientene! Du kan bidra med ditt spørsmål, enten ved å sende
              en epost til{" "}
              <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no</Link>{" "}
              eller en DM på Instagram.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Prof. Eszter Vanky er den ledende forskeren innen PCOS i Norge og
              jobber for mer kunnskap om diagnosen i helsevesenet. Hennes
              forskning er internasjonalt anerkjent, spesielt på PCOS i
              graviditet og langtidseffekten av PCOS for mor og barns helse.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Meld deg på arrangementet her:
              <br />
              <Link href="https://zoom.us/meeting/register/HByr_0FrToqLqx7v0DS9lw">
                https://zoom.us/meeting/register/HByr_0FrToqLqx7v0DS9lw
              </Link>
            </Text>
            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Sosiale medier
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Følg med i sosiale medier for å få informasjon om alle våre
              digitale og fysiske aktiviteter i september.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Facebook:{" "}
              <Link href="https://www.facebook.com/pcosnorge">PCOS Norge</Link>
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Instagram:{" "}
              <Link href="https://www.instagram.com/pcosnorge">@pcosnorge</Link>
            </Text>
            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Siste sjanse!
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Siste sjanse til å si sin mening om hva et nytt navn på diagnosen
              PCOS bør være er 31. august! Les mer og vær med på å si din mening
              om hva det nye navnet bør være{" "}
              <Link href="https://www.pcosnorge.no/aktuelt/pcos-far-nytt-navn">
                her.
              </Link>
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NBAwarenessMonth as unknown as { subject: string }).subject =
  "PCOS Awareness Month";

export default NBAwarenessMonth;
