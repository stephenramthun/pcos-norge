import BaseLayout from "./components/BaseLayout";
import { fontSize, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Footer from "./components/Footer";
import React from "react";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
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

export const NyhetsbrevSeptember2026: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={600} paddingBottom={spacing.s10}>
              Velkommen til webinar med fagpersoner
            </Heading>
            <Paragraph paddingBottom={spacing.s10}>
              PMOS Norge har fått tilskudd fra Stiftelsen Dam til en egen
              webinarrekke med tema ‘Innsikt og mestring’.
            </Paragraph>

            <SubHeader paddingBottom={spacing.s4}>Overgangskraft</SubHeader>
            <Paragraph paddingBottom={spacing.s4}>
              Legespesialist i allmennmedisin Marianne Natvik om overgangsalder
              med PMOS
            </Paragraph>
            <Paragraph paddingBottom={spacing.s4}>
              Tirsdag 22. september kl 12:00-13:00
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Registrer deg her:{" "}
              <Link href="https://zoom.us/meeting/register/ASqWa3wNRDujTpmmFjxCqg">
                https://zoom.us/meeting/register/ASqWa3wNRDujTpmmFjxCqg
              </Link>
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Webinaret er gratis for alle medlemmer, men du må registrere deg
              for å få lenke til møtet tilsendt på epost. Ved å registrere deg
              får du også tilsendt lenke til seminaret i etterkant, som gir deg
              tilgang i 14 dager, i tilfelle du ikke rekker å se det live, eller
              ønsker å se det flere ganger.
            </Paragraph>

            <SubHeader paddingBottom={spacing.s4}>Om webinaret</SubHeader>
            <Paragraph paddingBottom={spacing.s8}>
              Gjennom livets mange faser kan PMOS gi ulike uttrykk i form av
              symptomer og utfordringer. Overgangsalder er en sentral livsfase i
              kvinners liv som i høy grad byr på overlappende problemstillinger
              med PMOS. Hva er PMOS og hva er overgangsalder? Hvordan kan man
              vite? Og er det noe særegent vi med PMOS må tenke på når det
              gjelder behandling og tilrettelegging midt i livet? Legespesialist
              i allmennmedisin Marianne Natvik hjelper oss i dette foredraget
              med å sortere: hva kjennetegner overgangsalderen, hva kan vi
              forvente oss og hvordan kan vi best mulig møte denne livsfasen med
              PMOS?
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Marianne er lege, spesialist i allmennmedisin med stort hjerte for
              kvinnehelse. Hun har jobbet flere år som fastlege og på
              kvinneklinikk på sykehus. Hun er en formidabel formidler av
              kunnskap knyttet til kvinnehelse, overgangsalder og egenomsorg,
              til kvinner og samfunnet generelt.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Dette webinaret passer for deg som enten har vært, er i, eller er
              på vei inn i overgangsalderen.
            </Paragraph>

            <SubHeader paddingBottom={spacing.s4}>Om webinarrekken</SubHeader>
            <Paragraph paddingBottom={spacing.s8}>
              Gjennom høsten 2026 og våren 2027 holder vi 8 fagwebinarer ledet
              av fagpersoner med spesialkompetanse å sine felt. Vi tar opp tema
              som livsfaser, psykisk helse, mestring, stress og kosthold.{" "}
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Webinarene støttes av fysiske visninger i samarbeid med
              likepersoner og Kvinnehelsehus Oslo, Drammen og Kristiansand. Om
              du bor i noen av disse byene kan du der søke et fellesskap av
              andre med samme diagnose, i et trygt rom for deling av erfaringer
              og med mulighet for å stille spørsmål. Etter visningene byr vi på
              lett bespisning og våre dyktige likepersoner leder samtalen. Disse
              arrangementene er gratis og åpne for alle. Du kan delta på dine
              egne premisser, det er lov å lytte og lære uten å dele noe
              personlig om deg selv. Våre likepersoner har taushetsplikt.
            </Paragraph>

            <SubHeader paddingBottom={spacing.s4}>
              Fysisk visning av webinaret ‘Overgangskraft’
            </SubHeader>
            <Paragraph paddingBottom={spacing.s8}>
              Onsdag 7. oktober kl 18:00-20:00
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Meld deg på i din by her:{" "}
              <Link href="https://forms.gle/YyxUQKZHSJEFK6ae6">
                https://forms.gle/YyxUQKZHSJEFK6ae6
              </Link>
              . Husk å oppgi allergier.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Adresser:
              <br />
              Kvinnehelsehus Oslo, Hagegata 32 (Tøyenhelsa)
              <br />
              Kvinnehelsehus Drammen, Amtmands Bangs gt. 1A
              <br />
              Kvinnehelsehus Kristiansand, Dronningens gt. 2A, 3. etg.
            </Paragraph>

            <SubHeader paddingBottom={spacing.s4}>
              Deltok du på fagkvelden vår mandag 7. september?
            </SubHeader>
            <Paragraph paddingBottom={spacing.s8}>
              Husk å gi oss tilbakemelding om hva du syns om webinaret her:
              <Link href="https://docs.google.com/forms/d/1D30NaCM8LYuduUuMBk6FxrhSWT3Gd84biyGEg5pr33Q/edit">
                https://docs.google.com/forms/d/1D30NaCM8LYuduUuMBk6FxrhSWT3Gd84biyGEg5pr33Q/edit
              </Link>
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Din tilbakemelding hjelper oss til å bli bedre og få mer innsikt i
              hva våre medlemmer ønsker av faglig påfyll.
            </Paragraph>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevSeptember2026 as unknown as { subject: string }).subject =
  "Velkommen til webinar med fagpersoner";

export default NyhetsbrevSeptember2026;
