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

export const NyhetsbrevSeptember2: React.FC = () => {
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
              Halvveis i september!
              <br />- oversikt over aktiviteter og økt bevissthet rundt PCOS!
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Vi er halvveis i september som er PCOS Awareness Month.
              Aktiviteten har vært stor, men om du ikke enda har rukket å delta
              på noen av våre tilbud får du her en oversikt over kommende
              arrangementer de neste to ukene:
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Kristiansand: Likepersonstreff</strong>
              <br />
              Onsdag 17. september kl. 12:00-14:00
              <br />
              Kvinnehelsehus Kristiansand, Dronningens gt. 2A, 3. etg.
              <br />
              Ingen påmelding, bare kom når du vil og bli så lenge du vil
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Sogndal: Temakveld PCOS</strong>
              <br />
              med daglig leder i PCOS Norge, Ann Helen Brendehaug
              <br />
              Onsdag 17. september kl 18:00-19:30
              <br />
              Kommunehuset i Sogndal
              <br />
              Ingen påmelding, men meld gjerne din interesse i FB-arrangementet{" "}
              <Link href="https://www.facebook.com/events/1508374496846127">
                her
              </Link>
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Drammen: Likepersonstreff</strong>
              <br />
              Mandag 22. september kl. 18:00-20:00
              <br />
              Tema: Insulinresistens – vi går gjennom hva insulinresistens er,
              hvorfor det er viktig å adressere insulinresistens med PCOS og hva
              man kan gjøre for å reversere insulinresistens.
              <br />
              Villa Fredrikke, Amtmand Bangs gt. 1, Drammen
              <br />
              Ingen påmelding, bare kom når du vil og bli så lenge du vil.
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>Oslo: FAGDAG 2025 – fortsatt ledige plasser!</strong>
              <br />
              Lørdag 27. september kl 10:00-17:00
              <br />
              ‘Hvordan mestre din PCOS’ – les mer om programmet og de 5
              fagforedragene{" "}
              <Link href="https://www.pcosnorge.no/aktuelt/velkommen-til-fagdag-i-oslo">
                her
              </Link>
              .
              <br />
              Litteraturhuset i Oslo, Wergelandsveien 29. Oppmøte fra 09:30
              <br />
              Meld deg på{" "}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc8fpjIZdVGjMs7RCoxyj4HgHz2ady1cFVpTCeSdm6_cNYEw/viewform">
                her
              </Link>
              .
              <br />
              Påmeldingsfrist: 18. september
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              <strong>
                DIGITALT: Foredrag – Hva forteller ny forskning oss om PCOS?
              </strong>
              <br />
              Med daglig leder i PCOS Norge, Ann Helen Brendehaug.
              <br />
              Tirsdag 30. september kl 14:00 på Zoom.
              <br />
              Meld deg på{" "}
              <Link href="https://zoom.us/meeting/register/J-zCb2jGRzWgPWdzxnOP1A#/registration">
                her
              </Link>
              .
            </Text>

            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Politisk arbeid
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Stortingsvalget er overstått og PCOS Norge er klar for å fortsette
              vårt politiske arbeid. Denne høsten er det hårfjerningstilbudet
              for pasientgruppen som står i fokus. I dag opplever mange med PCOS
              at fastlegen ikke vil henvise til offentlig støttet
              laserbehandling for økt behåring i ansikt og på hals. Samtidig ser
              vi at hvor du bor i Norge er avgjørende for om du får et tilbud og
              om tilbudet er tilstrekkelig, ettersom de ulike helseregionene har
              ulik praksis. Vi hører også historier fra dere om lange
              pasientreiser for å få utført laserbehandlingen, gjerne på tvers
              av et langstrakt land. Behandlingen ser heller ikke ut til å være
              effektiv nok for de som har lyse hår, melaninrik hudfarge eller de
              med mest uttalt hårvekst. PCOS Norge venter på at en ny Regjering
              og ny Helse- og omsorgskomité skal bli konstituert, slik at vi kan
              gjøre denne problematikken kjent for de som skal styre landet de
              kommende fire årene.
            </Text>

            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Nordisk samarbeid
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Denne høsten jobber vi også med å få i stand et nordisk samarbeid
              og søke midler fra Nordens välfärdscenter i samarbeid med
              pasientorganisasjonene i Finland og på Island. Sverige og Danmark
              har fremdeles ikke etablert dedikerte pasientorganisasjoner for
              PCOS. Samarbeidet er et initiativ for å utveksle erfaringer og
              samkjøre politisk og bevissthetsøkende arbeid mot EU/EØS og
              internasjonale forskningsmiljø.
            </Text>

            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Driftsmidler for 2026
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              PCOS Norge har denne måneden søkt driftsmidler for driftsåret 2026
              i ordningen for Funksjonshemmedes organisasjoner. Svar på søknaden
              kommer først i februar 2026. Med 1024 medlemmer som grunnlag for
              søknaden håper vi å kunne løfte tilbudet til pasientgruppen
              videre.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              DU er enormt viktig for oss, det er våre betalende medlemmer som
              avgjør hvor mye vi kan motta i offentlige støttemidler.
              Kontingentinnbetalingene er dessuten fremdeles PCOS Norges
              viktigste inntektskilde.
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              I dag er vi 1206 medlemmer og vi håper hver og en av dere vil bli
              med oss videre! Tusen takk til hver enkelt av dere, det er dere
              som muliggjør jobben vi gjør!
            </Text>

            <Heading
              fontSize={fontSize.lg}
              fontWeight={fontWeight.bold}
              paddingBottom={spacing.s4}
            >
              Medlemsfordeler
            </Heading>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              I forbindelse med Fagdagen 2025 har vi jobbet med å få til noen
              medlemsfordeler for alle våre medlemmer og disse vil bli annonsert
              i eget nyhetsbrev etter at fagdagen er overstått. Følg med! =)
            </Text>
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
