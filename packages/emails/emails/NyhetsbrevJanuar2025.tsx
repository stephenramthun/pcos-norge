import React from "react";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Text from "./components/Text";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Link from "./components/Link";

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

export const NyhetsbrevJanuar2025: React.FC = () => {
  return (
    <BaseLayout width={600} style={welcomeStyle}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s10} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Kjære medlem,
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vil du bli styremedlem i PCOS Norge?
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vi søker deg som er engasjert, selvstendig, har stor
              arbeidskapasitet og ønsker å bidra i frivillig arbeid for å bedre
              rettighetene til alle som lever med PCOS i Norge.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Du må påregne 3-5 timers arbeid for foreningen per uke. Det
              avholdes styremøter hver måned og representasjon vil være
              forventet.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Arbeidet er frivillig og man mottar ingen økonomisk kompensasjon
              for sitt arbeid, utover et årlig symbolsk styrehonorar som
              fastsettes av generalforsamlingen.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vi trenger styremedlemmer, varamedlemmer og kandidater til
              valgkomiteen.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              PCOS Norge er en pasientorganisasjon i rask vekst som per årsslutt
              2024 bikket 1000 medlemmer.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              PCOS Norge kan tilby et engasjert og inspirerende miljø hvor man
              raskt blir en del av teamet. En fordel hos oss er at alle vet
              hvordan hverdagen med PCOS er, uten at man trenger å forklare.
              Foreningen har en stor arbeidsbyrde som vi backer hverandre i å få
              gjennomført.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              I 2025 ønsker vi å tilby styret vårt sertifisering innen
              likepersonsarbeid i tillegg til faglig påfyll, for å øke
              kompetansen i møte med helseforetak, forskermiljø, politikere,
              pasientgruppen og media.
            </Text>
            <Text
              cssClass="p"
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s8}
            >
              Hvis dette høres ut som noe for deg kan du sende en epost til{" "}
              <Link href="mailto:valgkomiteen@pcosnorge.no">
                valgkomiteen@pcosnorge.no
              </Link>
              .
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Valgkomiteen vil trenge en kort presentasjon av deg, din erfaring
              som diagnostisert med PCOS, og litt om din motivasjon for å bli en
              del av styret.
            </Text>
            <Text
              cssClass="p"
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s8}
            >
              Frist for å sende sin interesse på epost er mandag 13. januar.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              For øvrige spørsmål om foreningens arbeid, kan du sende en epost
              til styreleder Ann Helen Brendehaug på{" "}
              <Link href="mailto:annhelen@pcosnorge.no">
                annhelen@pcosnorge.no
              </Link>
              .
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Du må være medlem av PCOS Norge for å kunne stille til valg i alle
              verv i foreningen. Er du ikke medlem, vil du ikke bli vurdert.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vi oppfordrer alle som ønsker å stille til valg om å lese PCOS
              Norges vedtekter som ligger ute på{" "}
              <Link href="https://www.pcosnorge.no/om-oss#vedtekter">
                www.pcosnorge.no/om-oss
              </Link>
              .
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Årsmøtet er planlagt til onsdag 12. februar. Mer informasjon
              kommer.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vennlig hilsen,
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Styret i PCOS Norge
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevJanuar2025 as unknown as { subject: string }).subject =
  "Nyhetsbrev Januar 2025";

export default NyhetsbrevJanuar2025;
