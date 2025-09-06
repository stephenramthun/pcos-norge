import BaseLayout from "./components/BaseLayout";
import { fontSize, fontWeight, screens, spacing } from "./theme";
import Header from "./components/Header";
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Footer from "./components/Footer";
import React from "react";

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

export const NyhetsbrevAugust2025: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s10} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              PCOS Norge endrer struktur
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Helt siden stiftelsen i 2021 har styret i PCOS Norge jobbet hardt
              for å profesjonalisere driften og løfte behandlingstilbudet for
              alle som lever med PCOS i Norge i dag. Frem til nå har
              organisasjonen vært driftet på frivillig innsats med et engasjert
              og effektivt styre med stor arbeidskapasitet. Arbeidet har ført
              frem: PCOS Norge er nå sentrale støttespillere til
              forskningsprosjekter fra Oslo i øst til Tromsø i nord. Høsten 2024
              ble det etablert en aktiv likepersonstjeneste digitalt, og fysiske
              møtesteder etableres fortløpende i hele landet. Organisasjonen
              jobber daglig med kunnskapsformidling, foredrag og annen
              informasjonsspredning til pasientgruppen, helseforetakene,
              politisk, i media og mot myndigheter. Vi har også etablert gode
              nettverk av forskere, andre pasientforeninger og helsepersonell,
              nasjonalt og i hele verden. PCOS Norge var i 2022 med på å
              grunnlegge Kvinnehelsealliansen, som er et nettverk av frivillige
              organisasjoner som jobber for mer satsing og offentlige midler til
              kvinnehelse, i dag bestående av nærmere 20 organisasjoner.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              PCOS Norge har lenge hatt nok arbeidsoppgaver til å fylle minst én
              fulltidsstilling og har nå mottatt driftsstøtte fra Bufdir.
              Organisasjonen er derfor klare for å ta neste steg og ansetter Ann
              Helen Brendehaug i en midlertidig prosjektstilling tilsvarende 26
              arbeidstimer i uken. Prosjektstillingen finansieres av
              driftsmidlene fra Bufdir og gjenspeiler størrelsen på, og
              aktiviteten, til organisasjonen. Ann Helen Brendehaug får tittelen
              Daglig leder for PCOS Norge og den midlertidige stillingen gjelder
              i tidsrommet august 2025 til februar 2026.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Ann Helen Brendehaug (40) er en av fire stiftende medlemmer av
              PCOS Norge og har vært med siden start. Hennes bakgrunn er
              kommunikasjon, tekstforfatting og ledelse i forlagsbransjen. I
              perioden 2024-2025 har hun vært styreleder for
              pasientorganisasjonen og har vært sentral i å bygge opp PCOS Norge
              slik organisasjonen fremstår i dag. Brendehaug vil fortsette å
              holde i de samme prosjektene som hun har hatt ansvar for som
              styreleder, men nå i dedikert og betalt arbeidstid.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              – Vi har jobbet målrettet for å komme til dette punktet, og er
              enormt glade over å kunne formalisere arbeidet vårt på denne
              måten, i alle fall i en prøveperiode frem til februar 2026. Det er
              en stor ære å få gjøre dette arbeidet for pasientgruppen og jeg
              gleder meg enormt! Vi har det siste året takket nei til alt for
              mange henvendelser pga. kapasitet og ser nå enda større muligheter
              for å styrke rettighetene og tilbudet for alle som lever med PCOS.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Ann Helen Brendehaug avtrer med andre ord som styreleder i PCOS
              Norge fra 1. august 2025. Dette er nødvendig siden ansatte i
              organisasjonen ikke kan ha styreverv. I henhold til vedtektene har
              styret i PCOS Norge valgt Emilie Oldervik som fungerende
              styreleder i perioden frem til årsmøtet i februar 2026. Johanna L.
              Rivera fortsetter som nestleder for organisasjonen.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Emilie Oldervik (38) har vært styremedlem i PCOS Norge siden 2023.
              Hun har sin bakgrunn som spesialveterinær for dyrevelferd og har
              bred erfaring innen strategi og ledelse.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              – Jeg er kjempeglad for at Emilie vil ta på seg styreledervervet
              frem til årsmøtet! Hun har vist seg som en stødig og kunnskapsrik
              person med mye empati og forståelse for utfordringene til
              pasientgruppen som hun også selv kjenner på kroppen. Et enstemmig
              styre stiller seg bak valget av Emilie og jeg gleder meg til vårt
              kommende samarbeid i månedene fremover, sier Ann Helen Brendehaug.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              PCOS Norge søker nye driftsmidler fra Bufdir for driftsåret 2026
              og er positive til at dette vil bevilges også for neste år, slik
              at organisasjonen kan opprettholde driften.{" "}
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              – Så får vi se om driftsmidlene holder til en helårsansettelse i
              en stillingsprosent som gjenspeiler arbeidsoppgavene. Per i dag
              har ikke PCOS Norge en stabil nok økonomi til å kunne ansette noen
              i en fast stilling. Hvor mye driftsmidler organisasjonen får
              avhenger av hvor mange medlemmer PCOS Norge har og hvor aktivt
              likepersonsmiljøet er. Å styrke medlemsmassen og
              likepersonstjenesten vår er derfor to viktige oppgaver som Ann
              Helen skal få bryne seg på i tiden fremover, sier påtroppende
              styreleder Emilie Oldervik.{" "}
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              Den beste måten du kan bidra til å styrke PCOS Norges arbeid på,
              er ved å fortsette å være betalende medlem. Du er viktig for
              organisasjonens fremtid!{" "}
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
};
(NyhetsbrevAugust2025 as unknown as { subject: string }).subject =
  "Velkommen til årsmøte";

export default NyhetsbrevAugust2025;
