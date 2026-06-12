import BaseLayout from "./components/BaseLayout";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Heading from "./components/Heading";
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

export const NyhetsbrevNavnebytte: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              Polyendokrint Metabolsk Ovarialsyndrom (PMOS) er det nye
              diagnosenavnet for Polycystisk ovariesyndrom (PCOS)
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Paragraph paddingBottom={spacing.s8}>
              Som medlem i PCOS Norge er du en av de første som har fått vite
              det nye navnet. I løpet av dagen følger vi opp med pressemelding,
              nettsideartikkel og informasjon i sosiale medier.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Dette er en historisk begivenhet for vår pasientgruppe. Aldri før
              har brukermedvirkning fra pasientorganisasjoner og kvinner som
              lever med diagnosen vært så sentralt i arbeidet med å endre et
              diagnosenavn. PCOS Norge har deltatt på workshops, i faglige
              diskusjoner og til slutt med å danne verdensomspennende konsensus
              om det nye navnet. Vi har gjort våre perspektiver godt kjent i
              prosessen.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Det nye navnet gir håp om at de komplekse implikasjonene som
              følger diagnosen nå skal tas på alvor og at livskvalitet, risiko
              og god helse gjennom hele livsløpet skal bli løftet frem i
              utviklingen av gode behandlings- og oppfølgingsløp videre.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Bakgrunnen for navnebyttet er at navnet Polycystisk ovariesyndrom
              med dagens kunnskap viser seg å være både misvisende og direkte
              feil. Cystene det refereres til er ikke egentlig cyster, men
              umodne eggfollikler som på ultralyd kan se ut som cyster i
              eggstokkene. Å få fokuset bort fra cyster og over på de hormonelle
              og metabolske utfordringene som følger diagnosen, kan bidra til
              mindre forvirring og raskere diagnostisering. Samtidig anerkjenner
              inkluderingen av ordet ‘ovarial’ at diagnosen kun rammer kvinner
              og at mange opplever syklusutfordringer og møter vanskeligheter
              når de ønsker å få barn.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Det nye navnet ble bestemt gjennom en robust og grundig prosess,
              basert på:
              <ul>
                <li>
                  Over 22.000 besvarelser på spørreundersøkelser i flere runder.
                </li>
                <li>
                  Innspill og kompetanse i 56 fagmiljøer og
                  pasientorganisasjoner fra hele verden.
                </li>
                <li>
                  Rundt 100 representanter fra de 56 fagmiljøene, som gjennom
                  flere workshops diskuterte og stemte seg frem til det nye
                  navnet.
                </li>
              </ul>
            </Paragraph>
            <Paragraph paddingBottom={spacing.s8}>
              Målet med navnebyttet er å:
              <ul>
                <li>
                  bedre favne at PCOS er en multisystemslidelse som i tillegg
                  til å ramme reproduktivt, også har hormonelle, metabolske,
                  psykiske og emosjonelle implikasjoner.
                </li>
                <li>
                  tiltrekke oppmerksomhet fra fagmiljøer som tidligere ikke har
                  vist særlig interesse for å forske på PCOS, eller jobbe for et
                  bedre helsetilbud. Det kan være alt fra kardiologer og
                  endokrinologer, til ernæringsfysiologer og psykologer.
                </li>
                <li>
                  sørge for bedre behandling og flere behandlingsalternativer.
                </li>
                <li>
                  bedre mulighetene for finansiering til oppfølging og kunnskap
                  om lidelsen.
                </li>
                <li>
                  bidra til at kvinner med diagnosen i større grad blir lyttet
                  til og tatt på alvor.
                </li>
              </ul>
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Følg med i sosiale medier og på nettsidene i løpet av dagen, og
              tiden fremover, for mer informasjon og flere ressurser.
            </Paragraph>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevNavnebytte as unknown as { subject: string }).subject =
  "Polyendokrint Metabolsk Ovarialsyndrom (PMOS) er det nye diagnosenavnet for Polycystisk ovariesyndrom (PCOS)";

export default NyhetsbrevNavnebytte;
