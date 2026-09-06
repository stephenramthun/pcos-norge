import BaseLayout from "./components/BaseLayout";
import { fontSize, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlImage, MjmlSection, MjmlWrapper } from "mjml-react";
import Text from "./components/Text";
import Footer from "./components/Footer";
import React from "react";
import Heading from "./components/Heading";
import Link from "./components/Link";
import Paragraph from "./components/Paragraph";

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

export const Fagdag2026: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={600} paddingBottom={spacing.s10}>
              Velkommen til digital fagkveld mandag 7. september
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              September, bevissthetsmåneden for PMOS, er her! Måneden byr på
              mange nyheter og aktiviteter fra PMOS Norge som bidrar til økt
              kunnskap og bevissthet om PMOS som diagnose.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Mandag 7. september inviterer PMOS Norge alle medlemmer til
              digital fagkveld kl 18:00-21:00. Datoen markerer også PMOS Norges
              5-årsdag. I den anledning har vi invitert forskerne selv til å
              presentere det nyeste innen kunnskap og forskning på PMOS, i Norge
              og internasjonalt.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Du får tilsendt møtelenke til fagkvelden ved å registrere deg via{" "}
              <Link href="https://zoom.us/meeting/register/pH02mbouTZyi_K6aQqweLQ#/">
                denne lenken
              </Link>
              . Når du er registrert har du tilgang til webinaret i 7 dager
              etter at det sendes live.
            </Text>
            <Heading paddingBottom={spacing.s3}>FAGWEBINAR</Heading>
            <Paragraph fontStyle="italic" paddingBottom={spacing.s8}>
              Ny forskning og kunnskap
            </Paragraph>
            <Paragraph paddingBottom={spacing.s4}>Program:</Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              18:00 - Velkommen og noen ord fra styreleder Emilie Oldervik og
              daglig leder Ann Helen Brendehaug
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              18:10 - Nytt navn, ny kunnskap – og et kompetanseløft blant
              fastleger
              <br />
              Professor Eszter Vanky intervjues av daglig leder Ann Helen
              Brendehaug om sitt iherdige og mangeårige arbeid for et bedre
              helsetilbud for alle med PMOS i Norge.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              18:45 - Kvinnehelse i blindsonen
              <br />
              Mange av utfordringene som i dag hindrer god og riktig behandling
              og oppfølging for PMOS-pasienter, er systemiske og gjelder for
              hele kvinnehelsefeltet. Seniorrådgiver på kvinnehelse i
              Sanitetskvinnene, Liv Bjørnhaug Johansen, hjelper oss med å løfte
              blikket og forklarer grunnene til at kunnskapshullene ikke blir
              tettet.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>19:15 - Pause</Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              19:30 - Blitzpresentasjoner
              <br />
              Korte presentasjoner av 5 nye og spennende forskningsprosjekter
              som kan bidra til mer kunnskap og bedre behandling for alle som
              lever med PMOS, presentert av forskerne selv.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              19:30 - Amming blant kvinner med PMOS av Universitetslektor i
              jordmorfag NTNU, Anne Engtrø Husby
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              19:40 - Fra evidens til praksis : pilot til selvmestringsprogram
              av Kaja Koppang, systemdesigner og gründer
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              19:50 - PMOS og psykisk helse : en studie fra Island av
              psykologistudenter Hafrún Helga Guđmundsdóttir og Aldís Björk
              Ingadóttir (presenteres på engelsk)
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              20:00 - PMOS og miljøgifter : befolkningsstudie fra nord av
              endokrinolog og phd-stipendiat Simon Kildal, Norges arktiske
              universitet
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              20:10 - PMOS, graviditet og vekt av legestudenter Kjartan Lid og
              Øystein Støfring
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              20:20 - Spørsmål til presentasjonene
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              20:30 GLP-1 som behandling for PMOS – hva vet vi?
              <br />
              GLP-1 har vist seg som effektiv behandling for PMOS langt utover
              vektreduksjon. Associate professor Ali Abbara fra Imperial College
              i London tar oss gjennom kunnskapsgrunnlaget vi har i dag.
              Foredraget foregår på engelsk.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Det vil være mulig å stille spørsmål i chatten underveis gjennom
              kvelden. Chatten modereres av styremedlemmer gjennom hele
              arrangementet.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Husk å registrere deg for å få tilsendt møtelenken! Vi ber også om
              at medlemmer i solidaritet ikke deler registreringslenken med
              andre. Dette er bare et av mange formidlingstiltak som vil bli
              tilgjengelig for medlemmer i tiden fremover. Dersom du kjenner
              noen som kunne ha nytte av å vite mer om PMOS, er det mulig å bli
              medlem og få tilgang{" "}
              <Link href="https://www.pmosnorge.no/bli-medlem">her</Link>.
            </Paragraph>
            <Text cssClass="p" paddingBottom={spacing.s4}>
              Vi gleder oss til å se deg!
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s11}>
              Beste hilsen, PMOS Norge
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(Fagdag2026 as unknown as { subject: string }).subject =
  "Velkommen til digital fagkveld mandag 7. september";

export default Fagdag2026;
