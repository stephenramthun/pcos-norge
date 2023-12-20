import React from "react";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Header from "./components/Header";
import Text from "./components/Text";
import Link from "./components/Link";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import { SubHeader } from "./components/SubHeader";

const welcomeStyle = `
  .p > * {
    font-size: ${fontSize.base}px !important;
  }

  @media (min-width:${screens.xs}) {
    .p > * {
      font-size: ${fontSize.md}px !important;
    }
  }
`;

type WelcomeProps = {
  name?: string;
};

export const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return (
    <BaseLayout width={600} style={welcomeStyle}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s10} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold} fontSize={fontSize.xxl}>
              {name
                ? `Hei ${name}, velkommen som medlem i PCOS Norge! 👋`
                : "Velkommen som medlem i PCOS Norge! 👋"}
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              PCOS Norge er en ideell landsdekkende forening for alle med
              diagnosen PCOS, for pårørende og for helsepersonell.
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Tusen takk for ditt økonomiske bidrag, ditt medlemskap er viktig
              for oss! Sammen står vi sterkere i kampen for et bedre helsetilbud
              og økt forståelse for de utfordringene alle med PCOS lever med til
              daglig.
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              <Link href="https://www.pcosnorge.no/om-oss">Her</Link> kan du
              lese mer om PCOS Norge og styret.
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Du kan når som helst administrere ditt medlemskap på{" "}
              <Link href="https://www.pcosnorge.no/min-side">
                www.pcosnorge.no/min-side
              </Link>
            </Text>

            <SubHeader>Hva er PCOS?</SubHeader>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              <Link href="https://www.pcosnorge.no/hva-er-pcos">Her</Link> er en
              grundig artikkel om hvordan diagnosen stilles, hvilke symptomer
              tilstanden kan medføre og behandlingsmetodene vi kjenner til i
              dag.
            </Text>

            <SubHeader>Har du fått diagnosen PCOS?</SubHeader>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vi anbefaler alle som har diagnosen om å gå inn på{" "}
              <Link href="https://www.legeforeningen.no/foreningsledd/fagmed/norsk-gynekologisk-forening/veiledere/veileder-i-gynekologi/pcos">
                Norsk gynekologisk forening sin veileder for PCOS
              </Link>{" "}
              og sette seg inn i informasjonen som finnes her. Bruk veilederen
              aktivt sammen med din fastlege eller gynekolog for å sikre
              enhetlig og riktig oppfølging. Du kan finne mer informasjon som
              kan være nyttig for deg og legen din på{" "}
              <Link href="https://www.pcosnorge.no">www.pcosnorge.no</Link>.
              Fortell gjerne legen din at vi finnes og at nettsiden vår kan
              brukes som en ressurs!
            </Text>

            <SubHeader>Hvordan kan du bidra?</SubHeader>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Oppfordre andre du kjenner til å bli medlemmer av PCOS Norge, husk
              at man ikke selv trenger å ha diagnosen for å bli medlem. Følg oss
              på instagram{" "}
              <Link href="https://www.instagram.com/pcosnorge/">
                @pcosnorge
              </Link>
              . Start en bursdagsinnsamling til inntekt for PCOS Norge på
              Facebook. Snakk om PCOS! Ved å bruke stemmene våre normaliserer vi
              diagnosen og gjør den mer kjent. Sammen bryter vi stigma og tabu!
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Tusen takk for støtten, og takk for at du er med på laget!
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Beste hilsen,
            </Text>

            <Text cssClass="p">Regine Vinnes Wiig Andersen</Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Styreleder PCOS Norge
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(Welcome as unknown as { subject: string }).subject =
  "Velkommen til PCOS Norge";

export default Welcome;
