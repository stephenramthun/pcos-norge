import BaseLayout from "./components/BaseLayout";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Heading from "./components/Heading";
import Text from "./components/Text";
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

export const NyhetsbrevApril2026: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>PCOS får nytt navn</Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Paragraph paddingBottom={spacing.s8}>Kjære medlem,</Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              I disse dager får PCOS nytt navn! Dette er historisk, ikke bare
              for alle som har PCOS, men også fordi dette er første gang en
              diagnose får et nytt navn gjennom en omfattende demokratisk
              prosess hvor både fagpersoner og pasienter selv har fått uttale
              seg.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Det nye navnet vil bli annonsert samtidig i hele verden og er
              strengt hemmelig frem til publiseringen. Som medlem i PCOS Norge
              er du en av de første som vil få nyheten direkte i din innboks!
            </Paragraph>

            <SubHeader>Hvorfor er et nytt navn nødvendig?</SubHeader>
            <Paragraph paddingBottom={spacing.s8}>
              Ny kunnskap har vist at PCOS er en kronisk multisystemslidelse som
              ikke bare påvirker reproduktivt, men rammer alle hormonsystemer,
              metabolsk og psykisk helse og har emosjonelle implikasjoner for de
              som er rammet. Polycystisk ovariesyndrom er rett og slett et
              utdatert og misvisende navn som i verste fall kan bidra til
              forvirring, manglende forståelse og oppfølging på legekontoret.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Gjennom flere runder med globale spørreundersøkelser har
              forskermiljøene i Australia, Europa og USA bedt fagpersoner og
              pasienter om å si sin mening om et nytt navn.{" "}
              <Link href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273733">
                Med over 20.000 besvarelser
              </Link>{" "}
              ble det klart at 76% av fagpersoner og 85% av pasienter ønsket et
              navn som bedre reflekterer utfordringene som følger PCOS. Målet
              med et nytt navn er bedre og mer målrettede
              behandlingsalternativer og at alle med diagnosen skal følges i et
              livsløpsperspektiv.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Høsten 2025 fikk PCOS Norge bidra til det faglige rådet som tok
              den endelige beslutningen om hva det nye navnet skal være. Rådet
              bestod av 86 fagpersoner og brukerrepresentanter fra alle
              kontinenter, og beslutningen ble fattet basert på tydelige
              tilbakemeldinger om hva fagpersoner og pasienter ønsket i
              spørreundersøkelsene.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Denne våren blir altså spesiell for alle som har PCOS i hele
              verden. Et nytt navn er en stor begivenhet som vil få mye
              oppmerksomhet i media og som kan bidra til å endre narrativet om
              hva PCOS er i samfunnet. PCOS Norge står klare til å spre nyheten
              i media, blant helsepersonell og politikere.
            </Paragraph>

            <SubHeader>Fastlegen kan diagnostisere PCOS</SubHeader>
            <Paragraph paddingBottom={spacing.s8}>
              Mange med PCOS ønsker å bli henvist til gynekolog for å få
              diagnosen, men fastlegen kan i de fleste tilfeller diagnostisere
              like presist – helt uten ultralyd. Les mer om hvorfor gynekologen
              ikke er nødvendig{" "}
              <Link href="https://www.pcosnorge.no/aktuelt/fastlegen-kan-diagnostisere-pcos">
                her
              </Link>
              .
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Det er viktig at fastlegen har ‘eierskap’ til PCOS, noe som vil
              bli understreket med det nye navnet. PCOS handler om mye mer enn
              reproduktiv helse og det er fastlegen som må koordinere
              oppfølgingen i de ulike livsfasene.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Derfor bidrar også PCOS Norge med våre perspektiver inn i
              utarbeidingen av et nytt kurs for fastleger, som skal øke
              kompetansen om PCOS. Du kan lese mer om prosjektet LØFT PCOS i{" "}
              <Link href="https://www.instagram.com/p/C_vVl2cqich/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
                denne instagramposten
              </Link>
              .
            </Paragraph>

            <SubHeader>Rabatt på konferansen Spiseforstyrrelser 2026</SubHeader>
            <Paragraph paddingBottom={spacing.s8}>
              Med PCOS er det økt risiko for spiseforstyrrelser og forstyrret
              spisemønster. Det er anslått at cirka 30% av alle med PCOS har en
              spiseforstyrrelse. Konferansen{" "}
              <Link href="https://fagfokus.no/konferanser/spiseforstyrrelser?gad_source=1&gad_campaignid=22824977494&gbraid=0AAAAACNWpJkuy5LswZiCxcxKLyiq40YW3&gclid=CjwKCAjwnN3OBhA8EiwAfpTYegIhc4W_SaUBPoLwsoc76AeuqalshnGvg3_2Q_4UdC-yri-vC_cEBxoCtmUQAvD_BwE">
                Spiseforstyrrelser 2026
              </Link>
              avholdes i Oslo 27.-28. april på Sixa Conference Oslo. Konferansen
              er en møteplasse som samler klinikere, forskere, brukere,
              pårørende og kommunale tjenester for å dele ny kunnskap, fremme
              erfaringsutveksling og styrke samhandling i behandling,
              forebygging og ettervern.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Som medlem i PCOS Norge får du 50% rabatt på konferansen med
              rabattkoden <strong>PCOS26</strong>. Det er mulig å delta både
              fysisk og digitalt.
            </Paragraph>

            <SubHeader>
              Nylig diagnostisert med PCOS og usikker på hva som skjer nå?
            </SubHeader>
            <Paragraph paddingBottom={spacing.s10}>
              Å få diagnosen PCOS kan føles overveldende. Mange sitter igjen med
              spørsmål, usikkerhet og kanskje bekymringer for fremtiden.
              Heldigvis er dette en tilstand som i de fleste tilfeller kan
              håndteres godt, særlig med riktige livsstilsendringer og eventuelt
              medisinsk behandling.{" "}
              <Link href="https://www.pcosnorge.no/aktuelt/nylig-diagnostisert-med-pcos-hva-na">
                Her
              </Link>{" "}
              har vi samlet noen tips og ressurser for deg som er ny til PCOS.
            </Paragraph>

            <SubHeader>
              Nordisk samarbeid bryter stillheten rundt PCOS
            </SubHeader>
            <Paragraph paddingBottom={spacing.s10}>
              Kvinner med PCOS står overfor de samme utfordringene i hele
              verden: underdiagnostisering, manglende behandlingstilbud og for
              lite kunnskap på legekontoret. PCOS Norge inngår nå et nordisk
              samarbeid for å øke bevisstheten om PCOS og jobbe for styrkede
              velferdsløsninger i hele den nordiske regionen. Les mer om
              samarbeidet og våre felles aktiviteter{" "}
              <Link href="https://www.pcosnorge.no/aktuelt/nordisk-samarbeid-bryter-stillheten-rundt-pcos">
                her
              </Link>
              .
            </Paragraph>

            <SubHeader>PCOS Norge fyller 5 år!</SubHeader>
            <Paragraph paddingBottom={spacing.s10}>
              Hold av datoen 7. september – da fyller PCOS Norge 5 år! Vi ønsker
              å feire dagen med en PCOS-festival og søker i disse dager om
              støttemidler slik at vi kan få realisert drømmen! Dersom vi får
              støttemidler vil vi invitere til en kveld med humor, musikk,
              debatt, intervju og det siste innen kunnskap på PCOS presentert av
              våre fremste fagfolk i Norge.
            </Paragraph>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevApril2026 as unknown as { subject: string }).subject =
  "Snart er det årsmøte – send inn dine forslag til saker!";

export default NyhetsbrevApril2026;
