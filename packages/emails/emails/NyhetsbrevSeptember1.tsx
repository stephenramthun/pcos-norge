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

export const NyhetsbrevSeptember1: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Kjære medlem,
            </Text>
            <Heading fontWeight={fontWeight.bold}>
              Velkommen til fagdag i Oslo 27. september
              <br />
              ‘Hvordan mestre din PCOS’
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Med denne fagdagen ønsker vi å gi våre medlemmer kunnskap og
              konkrete verktøy til å bedre mestre PCOS i hverdagen, oppnå
              symptomlette og forebygge tilleggssykdom. Det blir en sosial og
              morsom dag med mye kunnskap og læring! Det blir lotteri, flere
              overraskelser, felles lunsj og muligheter for å stille
              foredragsholderne spørsmål.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Tid: <strong>lørdag 27. september kl 10:00-17:00.</strong>
              <br />
              Sted: <strong>Litteraturhuset i Oslo, Berner-kjelleren</strong>,
              Wergelandsveien 29.
              <br />
              Registrering starter 09:30.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Fagdagen er gratis for alle medlemmer. Påmelding via lenke{" "}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc8fpjIZdVGjMs7RCoxyj4HgHz2ady1cFVpTCeSdm6_cNYEw/viewform">
                her
              </Link>
              .
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Bindende påmelding</strong>. Dersom du ikke kan møte opp
              og ikke gir oss beskjed om at du er forhindret 24 timer før
              arrangementet, vil vi sende ut en faktura på kr 400,- som dekker
              bindende utgifter.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Medlemmer må kunne vise betalt kontingent ved registrering.
              Usikker på om du er medlem? Sjekk{" "}
              <Link href="https://www.pcosnorge.no/min-side">Min side</Link>.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Begrensede plasser, medlemmer får førsteprioritet.
              <br />
              Ikke-medlemmer kan også delta og betaler da kr 400,-
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Allergier og intoleranser kan oppgis i påmeldingsskjemaet.
            </Text>

            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Program
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                10:00-10:15
                <br />
                Velkommen
              </strong>
              <br />
              Styreleder i PCOS Norge, Emilie Oldervik, ønsker velkommen.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                10:15-10:45
                <br />
                PCOS 101 – fra fertilitetsdiagnose til multimorbiditet
              </strong>
              <br />
              Daglig leder i PCOS Norge, Ann Helen Brendehaug, viser hvordan
              forståelsen av diagnosen PCOS har endret seg de siste årene og hva
              den nye forskningen gir oss av kunnskap.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                11:00-11:45
                <br />
                PCOS og insulinresistens – en skjult nøkkelfaktor, og hva du
                selv kan gjøre
              </strong>
              <br />
              Ernæringsfysiolog Karin Sømme gir oss detaljert kunnskap om den
              viktigste driveren av PCOS-symptomer, insulinresistens.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                12:00-12:45
                <br />
                PCOS, fertilitet og livsstilsfaktorene
              </strong>
              <br />
              Fertilitets- og svangerskapsterapeut og leder ved Frøyaklinikken,
              Anette Heggemsnes, gir oss kunnskap om hvordan vi kan få mer
              stabil syklus og økt fertilitet gjennom å spille på lag med
              kroppen.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                13:00-14:00
                <br />
                Lunsj
              </strong>
              <br />
              Foredragsholderne blir med oss i lunsjen.
              <br />
              Flere overraskelser!
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                14:00-14:45
                <br />
                Fra dørstokkmil til dørstokkmeter – mer treningsglede og mindre
                kroppspress!
              </strong>
              <br />
              Personlig trener Malin Killie-Grenasberg gjør fysisk aktivitet
              overkommelig og inkluderende for ALLE og motiverer oss til å leve
              mer aktive liv gjennom vektnøytral trening.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                15:00-15:45
                <br />
                Syklus – besnærende og til besvær
              </strong>
              <br />
              Sexolog Tone Ollestad, gir oss kunnskap om syklus og hva som skjer
              når en PCOS-syklus er i ubalanse. Hun viser hvordan syklus
              påvirker alt og viktigheten av å sette grenser for seg selv.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                16:00-17:00
                <br />
                Samtalegruppe + trekning av lotteripremier
              </strong>
              <br />
              Vi debriefer dagen: hva har vi lært, hvilke tips tar vi med oss
              hjem igjen til hverdagen – og hvordan kan vi oppnå varig
              livsstilsendring?
              <br />
              Det blir loddtrekning: hvem vinner de kjempeflotte premiene store
              og små bedrifter har donert?
            </Text>

            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Foredragsholderne
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Ann Helen Brendehaug</strong> var med på å grunnlegge PCOS
              Norge i 2021 og er i dag ansatt i en midlertidig prosjektstilling
              som daglig leder. Hun har jobbet med formidling av evidensbasert
              kunnskap og erfaringsbasert livsstilsinnhold de siste fem årene
              gjennom sosiale medier som @pcosbyannhelen. Hennes bakgrunn er i
              forlagsbransjen, som tekstforfatter og ledelse innen
              markedsføring, salg og formidling.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Karin Sømme</strong> har en bachelorgrad i
              ernæringsfysiologi og har studert master i Folkehelsevitenskap.
              Hennes interesse for ernæring startet da datteren fikk diabetes
              type 1 som treåring i 2001. Gjennom både utdanning og mange års
              personlig erfaring har hun opparbeidet seg en solid innsikt i
              blodsukkerkontroll og hvordan insulin påvirker kroppen. I dette
              foredraget deler hun blant annet kunnskap om hva insulinresistens
              er, hvordan den utvikles, og hvordan den henger sammen med blant
              annet PCOS, samt hvilke grep som kan bidra til å reversere
              tilstanden.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Anette Heggemsnes</strong> er fertilitets- og
              svangerskapsterapeut. Hun etablerte Frøyaklinikken i 2001, som
              Norges første naturmedisinske fertilitet- og svangerskapsklinikk.
              Hun har utdannelse innenfor ernæring, akupunktur, homeopati og
              refleksologi (soneterapi).
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Malin Killie-Grenasberg</strong> er en personlig trener
              litt utenom det vanlige! Hun brenner for å gjøre trening og
              bevegelse inkluderende og tilgjengelig for alle, og har en
              vektnøytral tilnærming til helse. Du kjenner henne kanskje som
              @malinshelsereise på Instagram, hvor hun aller helst danser for å
              spre budskapet om at alle kropper er like mye verdt, samtidig som
              hun gjør alt hun kan for at DU skal føle deg tryggere i kroppen
              din.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Tone Ollestad</strong> er sexolog og parterapeut. Hun står
              bak «Kvinnemanualen» i sosiale medier og er en levende og dyktig
              formidler av kunnskap om kvinners kropp, psyke, syklus og
              seksualitet. Hun holder engasjerende foredrag om hvordan kvinners
              syklus påvirker alt og viktigheten av det å sette grenser. Med
              Tone Ollestads forklaringer vil kvinner kjenne seg igjen i hvordan
              de har jobbet mot kroppen sin og ikke med den.
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevSeptember1 as unknown as { subject: string }).subject =
  "PCOS Awareness Month";

export default NyhetsbrevSeptember1;
