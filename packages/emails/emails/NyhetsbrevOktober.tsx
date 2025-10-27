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

export const NyhetsbrevSeptember2: React.FC = () => {
  return (
    <BaseLayout width={600} style={style}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold}>
              En hilsen fra helseministeren!
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s10}>
              PCOS Norge inviterte selvsagt Helseminister Jan Christian Vestre
              og alle medlemmer av helse- og omsorgskomiteen til fagdagen i Oslo
              27. september. Invitasjonen ble godt mottatt på helseministerens
              kontor og selv om Vestre var forhindret fra å delta, sendte
              helseministerens kontor oss en videohilsen til alle medlemmer i
              PCOS Norge. Videohilsenen fra Helseminister Jan Christian Vestre
              kan du se <Link href="https://youtu.be/jKjCjuszarI">her.</Link>
            </Text>

            <SubHeader>Aktiviteter i oktober</SubHeader>
            <Paragraph paddingBottom={spacing.s10}>
              Her er en oversikt over alle fysiske og digitale aktiviteter i
              regi av PCOS Norge og frivillige likepersoner i oktober.
            </Paragraph>

            <SubHeader>
              Vi holder temakveld om PCOS i to byer: Trondheim og Ålesund!
            </SubHeader>

            <Bold paddingBottom={spacing.s6}>
              TEMA: HVA KAN VI LÆRE AV FORSKNING PÅ PCOS?
            </Bold>
            <Paragraph paddingBottom={spacing.s6}>
              Velkommen til gratis temakveld om PCOS med daglig leder i PCOS
              Norge, Ann Helen Brendehaug.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s6}>
              De siste årene har vår forståelse av diagnosen PCOS endret seg
              radikalt. Fra å primært bli behandlet som en fertilitetsdiagnose,
              anerkjennes det i dag at PCOS rammer bredt og påvirker alle
              aspekter ved livet til den rammede. Vi har mye ny forskning som
              enda ikke er implementert i dagens behandlingstilbud. Ann Helen
              guider oss gjennom det nyeste av evidensbasert kunnskap om PCOS.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              Det er mulig å stille spørsmål og dele erfaringer under og etter
              presentasjonen. Vel møtt!
            </Paragraph>

            <Bold paddingBottom={spacing.s0}>TRONDHEIM</Bold>
            <Paragraph paddingBottom={spacing.s6}>
              Mandag 20. oktober kl 18:00-20:00
              <br />
              Kvinne-barn-senteret, St. Olavs hospital, 6 etg. Olav Kyrres gate
              <br />
              Meld deg på{" "}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScMFm6u4zjLEhLheCS_F5NoeE--bkaud2zGhnHk3LrdJmz7ag/viewform?usp=header">
                her.
              </Link>
              <br />
              Begrensede plasser!
            </Paragraph>

            <Bold paddingBottom={spacing.s0}>ÅLESUND</Bold>
            <Paragraph paddingBottom={spacing.s10}>
              Torsdag 23. oktober kl 18:00-20:00
              <br />
              Ålesund Frivillighetssentral, Kirkegata 33
              <br />
              Meld deg på{" "}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdxTtfnFGWeM5XTovk3ckp6GTCJUfiKcyTLw9A5t2qsvRwByA/viewform?usp=header">
                her.
              </Link>
              <br />
              Begrensede plasser!
            </Paragraph>

            <SubHeader>Fysiske likepersonstreff</SubHeader>

            <Paragraph paddingBottom={spacing.s6}>
              <strong>Et likepersonstreff</strong> er en støttegruppe der man
              kan komme sammen og dele erfaringer når man lever med samme
              diagnose. Treffet kan være kurs, lavterskel møteplasser og
              aktivitetsgrupper.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s6}>
              Vi anbefaler alle med PCOS til å bruke sine lokale tilbud, slik at
              de kan bestå. Det har en helt spesiell verdi å snakke med andre
              som forstår hverdagens utfordringer uten at man må forklare eller
              argumentere. Å snakke med andre som har PCOS kan gi bedre psykisk
              helse og livskvalitet, samt øke kunnskap og bevissthet om egen
              diagnose og etablere gode vennskap med likesinnede.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s6}>
              <strong>En likeperson</strong> er en samtalepartner, med samme
              diagnose, som man kan dele erfaringer med for å lettere komme
              gjennom hverdagens utfordringer.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s10}>
              <strong>En likeperson har taushetsplikt.</strong> Vedkommende gir
              ikke medisinske råd og er ingen terapeut, men kan bistå til
              mestring av egen livssituasjon og være en samtalepartner eller
              aktivitetspartner.
            </Paragraph>

            <Bold paddingBottom={spacing.s0}>Likepersonstreff i Drammen</Bold>
            <Paragraph paddingBottom={spacing.s6}>
              13. oktober kl 18:00-20:00
              <br />
              Villa Nora, Amtmand Bangsgt. 1A
              <br />
              Ingen påmelding, kom når du vil og dra når du vil.
            </Paragraph>

            <Bold paddingBottom={spacing.s0}>
              Likepersonstreff i Kristiansand
            </Bold>
            <Paragraph paddingBottom={spacing.s6}>
              15. oktober kl 12:00-14:00 (sammen med Endometrioseforeningen)
              <br />
              Kvinnehelsehus Kristiansand, Dronningens gt. 2A, 3. Etg
              <br />
              Ingen påmelding, kom når du vil og dra når du vil.
            </Paragraph>

            <Bold paddingBottom={spacing.s0}>Likepersonstreff i Bodø</Bold>
            <Paragraph paddingBottom={spacing.s6}>
              16. oktober kl 17:00-19:00
              <br />
              Lavterskel gåtur langs den nye Kyststien. Oppmøte ved
              Jektefartsmuseumet.
              <br />
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd-TCirRPp2YiqbAiILmULAmpCTqUmYN-hikuI09sLuY0-Ywg/viewform?usp=header">
                Påmelding her
              </Link>
            </Paragraph>

            <Bold paddingBottom={spacing.s0}>Likepersonstreff i Oslo</Bold>
            <Paragraph paddingBottom={spacing.s6}>
              16. oktober kl 18:00-20:00
              <br />
              Kvinnehelsehus Oslo, Hagegata 32 (5. etg på Tøyenhelsa H32)
              <br />
              Ingen påmelding, kom når du vil og dra når du vil.
            </Paragraph>

            <Bold paddingBottom={spacing.s0}>Likepersonstreff i Sogndal</Bold>
            <Paragraph paddingBottom={spacing.s10}>
              23. oktober kl 18:00-20:00
              <br />
              Kommunehuset i Sogndal sentrum
              <br />
              Ingen påmelding, kom når du vil og dra når du vil.
            </Paragraph>

            <SubHeader>Digitale samtalegrupper</SubHeader>
            <Paragraph paddingBottom={spacing.s6}>
              Våre digitale samtalegrupper er åpne for alle med diagnosen PCOS
              og pårørende. Vi setter opp ulike tema for de ulike
              samtalegruppene og man får tilsendt digital lenke ved å melde seg
              på de samtalegruppene som er aktuelle for en.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s6}>
              Det er frivillig å dele personlige erfaringer og man bestemmer
              selv hvor mye man ønsker å delta i samtalen, eller om man ønsker å
              ha på kamera. Det er mulig å stille spørsmål og likepersonene fra
              PCOS Norge som holder aktiviteten bidrar med sin kunnskap og
              erfaring.
            </Paragraph>
            <Bold paddingBottom={spacing.s10}>
              De digitale samtalegruppene tas ikke opp og likepersonene har
              taushetsplikt.
            </Bold>

            <Paragraph paddingBottom={spacing.s6}>
              Onsdag 8. oktober kl 18:00
              <br />
              Tema: svangerskapsdiabetes
              <br />
              <Link href="https://zoom.us/meeting/register/wpa_i0ZTTsSn7yE-w7n4_g">
                Påmelding her
              </Link>
            </Paragraph>

            <Paragraph paddingBottom={spacing.s6}>
              Torsdag 9. oktober kl 20:00
              <br />
              Tema: vektreduksjon med PCOS
              <br />
              <Link href="https://zoom.us/meeting/register/lY6BcI0PSiG7tn1IsLReqw">
                Påmelding her
              </Link>
            </Paragraph>

            <Paragraph paddingBottom={spacing.s6}>
              Tirsdag 14. oktober kl 19:00
              <br />
              Tema: insulinresistens med PCOS
              <br />
              <Link href="https://zoom.us/meeting/register/FA6U4vn8Qt-96l70k4KwzQ">
                Påmelding her
              </Link>
            </Paragraph>

            <Paragraph paddingBottom={spacing.s6}>
              Søndag 19. oktober kl 18:00
              <br />
              Tema: Trening og fysisk aktivitet med PCOS
              <br />
              <Link href="https://zoom.us/meeting/register/W5SZfDo0T7uBHHUbL2y6CA">
                Påmelding her
              </Link>
            </Paragraph>

            <Paragraph paddingBottom={spacing.s6}>
              Mandag 27. oktober kl 10:00
              <br />
              Tema: Hvordan snakke med familie og pårørende om PCOS?
              <br />
              <Link href="https://zoom.us/meeting/register/oNaihTcmTpWx_7EzS0KKvw">
                Påmelding her
              </Link>
            </Paragraph>

            <Paragraph paddingBottom={spacing.s10}>
              Onsdag 29. oktober kl 18:00
              <br />
              Tema: for alle pårørende av noen med PCOS
              <br />
              <Link href="https://zoom.us/meeting/register/3szo12GAT-anFyXAHChEfA">
                Påmelding her
              </Link>
            </Paragraph>

            <SubHeader>
              Hvorfor tilbyr PCOS Norge likepersonsaktiviteter?
            </SubHeader>
            <Bold paddingBottom={spacing.s6}>
              Erfaringsutveksling er kjernen i frivillig pasientorganisasjoners
              virksomhet.
            </Bold>
            <Paragraph paddingBottom={spacing.s6}>
              Når våre medlemmer, andre som lever med PCOS og pårørende deltar
              på aktiviteter, enten fysisk eller digitalt, samler PCOS Norge
              poeng som vi melder inn til Bufdir når vi hvert år søker
              driftsmidler til organisasjonen. Desto flere frivillig engasjerte
              likepersoner vi har rundt omkring i landet, og desto flere
              aktiviteter vi holder i løpet av et kalender år, jo mer penger vil
              vi motta i driftsmidler som vi kan bruke til å øke bevissthet om
              PCOS blant helsepersonell, politikere og i media. Midlene brukes
              også til å jobbe for et bedre behandlingstilbud for alle som lever
              med PCOS, og til å stimulere til mer forskning.
            </Paragraph>
            <Paragraph paddingBottom={spacing.s6}>
              Har du lyst til å bli likeperson? Send en epost til
              post@pcosnorge.no for å få mer informasjon!
            </Paragraph>
            <Paragraph paddingBottom={spacing.s6}>
              Takk for at du er medlem og muliggjør arbeidet vårt! Følg oss i
              sosiale medier for oppdatert informasjon om aktivitetene våre.{" "}
            </Paragraph>
            <Paragraph paddingBottom={spacing.s6}>
              Instagram: @pcosnorge
              <br />
              Facebook: PCOS Norge
              <br />
              Forum: PCOS Søstre Norge
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
