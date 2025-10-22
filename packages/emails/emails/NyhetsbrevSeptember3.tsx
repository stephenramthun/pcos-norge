import BaseLayout from "./components/BaseLayout";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Footer from "./components/Footer";
import React from "react";
import Link from "./components/Link";
import Bold from "./components/Bold";
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

export const NyhetsbrevSeptember2: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              Fordeler og rabatter til deg som er medlem i PCOS Norge!
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s6}>
              Vi avslutter PCOS Awareness Month med en vellykket fagdag i helgen
              og et rabattdryss til alle våre medlemmer!
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s10}>
              I forbindelse med fagdagen har vi samarbeidet med flere
              nettbutikker og andre som leverer produkter og tjenester som kan
              være til nytte med PCOS. Her er oversikten:
            </Text>

            <Text
              cssClass="p"
              paddingBottom={spacing.s4}
              fontWeight={fontWeight.bold}
            >
              Appen HEIA av Malin Killie Grenasberg
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s4}>
              Malin var med oss på fagdagen og snakket om viktigheten av
              aktivitet og trening i hverdagen med et vektnøytralt utgangspunkt.
              Hun snakket også om kroppsaksept, og hun laget en helt egen
              PCOS-sang! Malin har sin egen trenings-app som heter HEIA! Hun har
              lagt ut PCOS-sangen og øvelsene til den i appen og som medlem i
              PCOS Norge kan du teste appen gratis i 7 dager og så med halv pris
              i 1 måned etter det. Les mer og last ned appen her:{" "}
              <Link href="https://www.malinshelsereise.no/">
                https://www.malinshelsereise.no/
              </Link>
            </Text>
            <Text
              cssClass="p"
              paddingBottom={spacing.s4}
              fontWeight={fontWeight.bold}
            >
              Rabattkode: PCOS
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Dersom du ikke er helt klar for å laste ned en treningsapp helt
              enda, kan du se sangen og øvelsene via denne lenken:{" "}
              <Link href="https://hei.malinshelsereise.no/pcos">
                https://hei.malinshelsereise.no/pcos
              </Link>
            </Text>

            <Bold paddingBottom={spacing.s4}>
              Kvinnemanualen av Tone Ollestad
            </Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Besøk nettsiden:{" "}
              <Link href="https://www.kvinnemanualen.no/">
                https://www.kvinnemanualen.no/
              </Link>
            </Paragraph>
            <Bold paddingBottom={spacing.s4}>Rabattkode: PCOS20</Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Tone er spesialist på sykluskunnskap og grensesetting. Hennes
              lidenskap er å hjelpe deg å leve i kontakt med kroppen din,
              følelsene dine og syklusen din. Hun hjelper deg også å forstå
              kvinnekroppen bedre, også når den ikke fungerer helt optimalt, som
              med PCOS.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Rabattkoden gir 20% rabatt på følgende kurs:
              <br />
              <Link href="https://www.kvinnemanualen.no/sykluskompasset-soknad">
                Nettkurs i syklus
              </Link>
              <br />
              <Link href="https://www.kvinnemanualen.no/nettkurs-grensesetting802331">
                Nettkurs i grensesetting
              </Link>
            </Paragraph>

            <Bold paddingBottom={spacing.s4}>
              Nourish Me av Anja Hope – ren hudpleie!
            </Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Besøk nettsiden:{" "}
              <Link href="https://www.nourishme.no/">
                https://www.nourishme.no/
              </Link>
            </Paragraph>
            <Bold paddingBottom={spacing.s4}>Rabattkode: PCOS</Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Hos NOURISH lager de hvert produkt med ekte, økologiske
              ingredienser som gir huden de nødvendige næringsstoffene den
              trenger. Ved å holde produktene så rene som mulig hjelper de deg
              til å gjøre valget enkelt neste gang du skal påføre huden
              fuktighet.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Rabattkoden gir 10% rabatt på hele sortimentet ut oktober.
            </Paragraph>

            <Bold paddingBottom={spacing.s4}>
              Frisk forlag – bøker om blodsukkervennlig livsstil, PCOS og
              livsstil/helse
            </Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Besøk nettsiden:{" "}
              <Link href="https://www.friskforlag.no/om-frisk-forlag/">
                https://www.friskforlag.no/om-frisk-forlag/
              </Link>
            </Paragraph>
            <Bold paddingBottom={spacing.s4}>Rabattkode: E6A95N65</Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Frisk forlag ble grunnlagt med en klar visjon: Å nå ut med
              oppdatert kunnskap om helse, slik at flere kan få det bedre. Siden
              2013 har de vært en viktig bidragsyter til at hundretusener av
              mennesker har tatt gode og tidvis avgjørende grep for sitt eget
              liv.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Rabattkoden gir 50kr rabatt på en ordre og er gyldig året ut.
            </Paragraph>

            <Bold paddingBottom={spacing.s4}>
              Superstate.no – nettbutikk med fokus på livsstil og kosttilskudd
            </Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Besøk nettsiden:{" "}
              <Link href="https://superstate.no">https://superstate.no</Link>
            </Paragraph>
            <Bold paddingBottom={spacing.s4}>Rabattkode: PCOS20</Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Superstate er opptatt av livsstil, alt fra å ville ha mer energi,
              sove godt, spise sunt, trene, trives på jobb, prestere, stresse
              ned osv.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Rabattkoden gir 20% rabatt på første kjøp.
            </Paragraph>

            <Bold paddingBottom={spacing.s4}>
              BeeOrganic – nettbutikk med fokus på miljø og å redusere
              miljøgifter
            </Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Besøk nettsiden:{" "}
              <Link href="https://www.beeorganic.no">
                https://www.beeorganic.no
              </Link>
            </Paragraph>
            <Bold paddingBottom={spacing.s4}>Rabattkode: pcos10</Bold>
            <Paragraph paddingBottom={spacing.s4}>
              BeeOrganic vil gjøre det lett å velge bedre! De har over 10 års
              erfaring med å tilby trygge og bærekraftige produkter og er en av
              de ledende nettbutikkene for miljøvennlige produkter i Norge. De
              brenner for å tilby det beste av det beste når det kommer til
              økologiske, naturlige og miljøvennlige produkter.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Rabattkoden gir deg 10% rabatt på hele sortimentet ut oktober.
            </Paragraph>

            <Bold paddingBottom={spacing.s4}>
              LevLogisk – nettbutikk som hjelper deg til en grønnere hverdag
            </Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Besøk nettsiden:{" "}
              <Link href="https://levlogisk.no">https://levlogisk.no</Link>
            </Paragraph>
            <Bold paddingBottom={spacing.s4}>Rabattkode: PCOSNorge15</Bold>
            <Paragraph paddingBottom={spacing.s4}>
              Lev Logisk er en norsk nettbutikk med miljøvennlige og trygge
              produkter for hele familien. De hjelper deg å ta gode valg i
              hverdagen – uten unødvendig plast, kjemikalier eller stress.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Rabattkoden gir deg 15% på hele sortimentet ut oktober.
            </Paragraph>

            <Bold paddingBottom={spacing.s4}>
              Fagfokus – Kvinnehelsekonferansen
            </Bold>
            <Text paddingBottom={spacing.s4}>
              6.-7. november, Thon Hotel Oslo Airport
              <br />
              Besøk nettsiden:{" "}
              <Link href="https://fagfokus.no/konferanser/kvinnehelsekonferansen">
                https://fagfokus.no/konferanser/kvinnehelsekonferansen
              </Link>
            </Text>
            <Bold paddingBottom={spacing.s4}>
              Rabattkode digital tilgang: KHA6711D (gir 25% rabatt)
            </Bold>
            <Bold paddingBottom={spacing.s4}>
              Rabattkode fysisk deltakelse: KVA6711F (gir 1500,- rabatt, ca. 35%
              av deltakeravgiften)
            </Bold>
            <Paragraph paddingBottom={spacing.s10}>
              En konferanse om kvinnehelse og arbeidsliv. Kvinnehelseproblemer
              er ofte underkommunisert. Med riktig tilrettelegging kan
              sykefravær og utbrenthet forebygges.
            </Paragraph>

            <Bold paddingBottom={spacing.s4}>
              Women’s Health Works – konferanse om kvinners arbeidshelse
            </Bold>
            <Paragraph paddingBottom={spacing.s4}>
              26. November, Nova Spektrum Lillestrøm
              <br />
              Besøk nettsiden:{" "}
              <Link href="hhttps://womenshealthworks.com">
                hhttps://womenshealthworks.com
              </Link>
            </Paragraph>
            <Bold paddingBottom={spacing.s4}>
              Rabattkode: PCOS (gir 30% rabatt)
            </Bold>
            <Paragraph paddingBottom={spacing.s10}>
              Likestillingssenteret KUN og Big Enough Global inviterer til en
              nasjonal konferanse om kvinnehelse i arbeidslivet. Ved å
              implementere verktøyene og kunnskapen du får under Women’s Health
              Works konferansen vil du ikke bare skape en enda bedre
              arbeidsplass – du vil også være med å kjempe et av våre tids
              viktigste likestillingskamper.
            </Paragraph>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevSeptember2 as unknown as { subject: string }).subject =
  "PCOS Awareness Month";

export default NyhetsbrevSeptember2;
