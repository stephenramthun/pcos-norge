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

export const NyhetsbrevSentAugust2025: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              Se hva vi får til denne høsten – takket være deg!
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Våre medlemmer er vår viktigste ressurs og med din hjelp går vi
              som organisasjon inn i en travel høst med mange viktige oppgaver,
              både nasjonalt og internasjonalt.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Tirsdag 26. august holder Ann Helen Brendehaug innlegg under
              NFOG-konferansen i Uppsala, den største konferansen for
              gynekologer i Norden. Ann Helen står på scenen sammen med
              presidenten i det internasjonale PCOS-forbundet AEPCOS Society,
              Tehri Piltonen. Tema for presentasjonen er ‘Health Risk and New
              Possibilities’.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              I slutten av oktober deltar nestleder i styret, Johanna L. Rivera,
              på den årlige PCOS-kongressen i regi av AEPCOS Society i San
              Antonio, Texas. PCOS Norge er invitert til kongressen for å delta
              i paneldebatt med tema ‘Research priorities in PCOS regarding
              infertility and pregnancy’.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Dette er to viktige anledninger til å vise frem arbeidet vårt og å
              få snakket direkte til forskere og helsepersonell om utfordringene
              vi som pasienter møter.
            </Text>
            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Hold av datoen – det blir fagdag!
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Lørdag 27. september holder vi vår aller første fagdag i Oslo! Mer
              informasjon om sted og program kommer. Tema for fagdagen er
              ‘Hvordan mestre din PCOS’. Programmet starter kl 10:00 og
              avslutter kl 17:00. Dagen vil inneholde 5 fagforedrag, felles
              lunsj og flere overraskelser. Vi ønsker å gjøre fagdagen gratis
              for våre medlemmer og jobber nå med finansiering og sponsing. Alle
              som mottar dette nyhetsbrevet vil få informasjon om program og
              påmelding først. Det er begrenset med plasser på denne fagdagen,
              så her kan det være lurt å være tidlig ute!
            </Text>
            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              PCOS Awareness Month
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Også i år bruker vi september måned til å sette ekstra søkelys på
              og øke bevissthet om PCOS. I tillegg til fagdagen holdes det flere
              arrangementer lokalt rundt omkring i Norge, og digitalt. Vi legger
              ut informasjon om arrangementene på Instagram, Facebook og
              nettsidene etter hvert som de bekreftes. Legg spesielt merke til
              vårt digitalarrangement hvor Professor Eszter Vanky svarer på
              publikums spørsmål, torsdag 4. september kl 19:00. Via
              instagramkontoen vår kan du stille dine spørsmål til Prof. Vanky.
            </Text>
            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              PCOS får nytt navn
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Selv om PCOS rammer 1 av 8 kvinner på verdensbasis, finnes det i
              dag begrenset med forskning og kunnskap blant helsepersonell, som
              medfører underdiagnostisering, manglende behandling og få
              behandlingsalternativer. Pasienter over hele verden rapporterer om
              forsinket diagnostisering, for dårlig kunnskap på legekontoret og
              misinformasjon. I en verdensomspennende spørreundersøkelse utført
              i forbindelse med arbeidet av 2023 International PCOS Guideline,
              ble det avdekket at et stort flertall av helsepersonell (76%) og
              pasientene selv (86%), ønsket et navnebytte.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Ved å besvare et kort spørreskjema kan DU være med å påvirke hva
              det nye internasjonale navnet skal bli!
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Les mer og vær med på å si din mening om hva det nye navnet bør
              være{" "}
              <Link href="https://www.pcosnorge.no/aktuelt/pcos-far-nytt-navn">
                her
              </Link>
              .
            </Text>
            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Likepersonsaktiviteter for august
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              I august holdes det tre digitale likepersonstreff. Denne måneden
              er det spesielt viktige tema som tas opp, som vi vet mange er
              opptatt av og frustrerte over. Likepersonsgruppene er ment som
              erfaringsutveksling og en arena for deling av tips og råd. Du
              trenger ingen forkunnskap for å delta og vi lærer av hverandre
              gjennom dialog. Registrer deg for å få tilsendt lenke til
              digitalmøtet. Månedens tema og tidspunkt er:
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Mandag 25. august kl 11:00
              <br />
              Hvor begynner man for symptomlindring?
              <br />
              <Link href="https://zoom.us/meeting/register/24BMbrA6SWaiXrUV06Nu8Q">
                https://zoom.us/meeting/register/24BMbrA6SWaiXrUV06Nu8Q
              </Link>
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Onsdag 27. august kl 19:00
              <br />
              Hva kan man stole på av informasjon om PCOS på nettet?
              <br />
              <Link href="https://zoom.us/meeting/register/24BMbrA6SWaiXrUV06Nu8Q">
                https://zoom.us/meeting/register/_mvMDINLRtqw0LdD1anJAA
              </Link>
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Torsdag 28. august kl 19:00
              <br />
              Hvordan snakke med legen om PCOS
              <br />
              <Link href="https://zoom.us/meeting/register/24BMbrA6SWaiXrUV06Nu8Q">
                https://zoom.us/meeting/register/7YPnNvQGTjahLyiKvqpsag
              </Link>
            </Text>

            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Novo Nordisk vil ikke forskere på PCOS
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Novo Nordisk setter en stopper for muligheten til å få Wegovy og
              andre GLP1-analoger på blå resept med PCOS som indikasjon.
              Legemiddelfirmaet er tydelige om at de ikke ønsker å prioritere
              forskningen som skal til for å gi markedsføringstillatelse for
              GLP1-analoger til behandling av PCOS. Les mer{" "}
              <Link href="https://www.pcosnorge.no/aktuelt/vil-ikke-forske-pa-pcos">
                her
              </Link>
              .
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevSentAugust2025 as unknown as { subject: string }).subject =
  "Velkommen til årsmøte";

export default NyhetsbrevSentAugust2025;
