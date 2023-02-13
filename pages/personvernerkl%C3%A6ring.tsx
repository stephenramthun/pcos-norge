import { NextPage } from "next"

import { Head } from "components/Head"
import { Main } from "components/Main"
import { Body } from "components/Body"
import { Link } from "components/Link"
import { Header } from "components/Header"
import { Footer } from "components/Footer"
import { Content } from "components/Content"
import { Heading } from "components/Heading"
import { Breadcrumbs } from "components/Breadcrumbs"
import { PageContainer } from "components/PageContainer"

import styles from "./personvernerklæring.module.css"

const Personvernerklæring: NextPage = () => {
  return (
    <PageContainer>
      <Head title="Personvernserklæring | PCOS Norge" />
      <Header />

      <Content>
        <Breadcrumbs
          links={[
            { label: "Hjem", href: "/" },
            { label: "Personvernerklæring", href: "personvernerklæring" },
          ]}
        />
      </Content>

      <Main>
        <Content className={styles.content}>
          <Heading tag="h1" size="medium-large">
            Personvernerklæring
          </Heading>
          <Body className={styles.revision}>Revisjonsdato: 25.01.2023</Body>
          <Body>
            PCOS Norge er behandlingsansvarlig for alle personopplysninger
            registrert hos oss. Vi forbeholder seg retten til å endre eller
            oppdatere personvernerklæringen. Dersom vi endrer
            personvernerklæringen legger vi ut den reviderte utgaven med
            revisjonsdato. Har du spørsmål som handler om hvordan vi jobber med
            personvern i foreningen kan du kontakte oss på{" "}
            <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no.</Link>
          </Body>
          <ol className={styles.list}>
            <li>
              <Heading tag="h2" size="small">
                Personopplysninger vi samler inn og behandler
              </Heading>
              <ul>
                <Body>
                  Ved innmelding i PCOS Norge registrerer vi følgende
                  informasjon om deg:
                </Body>
                <li>
                  <Body>Navn</Body>
                </li>
                <li>
                  <Body>Fødselsdato</Body>
                </li>
                <li>
                  <Body>Postadresse</Body>
                </li>
                <li>
                  <Body>E-postadresse</Body>
                </li>
                <li>
                  <Body>Telefonnummer</Body>
                </li>
                <li>
                  <Body>Medlemsnummer</Body>
                </li>
              </ul>
            </li>
            <li>
              <Heading tag="h2" size="small">
                Hvordan vi bruker personopplysningene
              </Heading>

              <Heading tag="h3" size="small">
                Levering av tjeneste/avtaleinngåelse
              </Heading>
              <Body>
                Vi bruker dine personopplysninger til å oppfylle våre avtaler
                med deg, som når du har registrert deg som medlem hos oss. Det
                rettslige grunnlaget for å behandle personopplysninger til dette
                formålet er at behandlingen er nødvendig for å oppfylle en
                avtale med deg.
              </Body>

              <Heading tag="h3" size="small">
                Administrasjon av kundeforhold
              </Heading>
              <Body>
                Vi bruker dine personopplysninger til å administrere ditt
                medlemskap hos oss. Det rettslige grunnlaget for å behandle
                personopplysninger til dette formålet er at behandlingen er
                nødvendig for å oppfylle en avtale med deg.
              </Body>

              <Heading tag="h3" size="small">
                Tilpasset brukeropplevelse
              </Heading>
              <Body>
                Vi tilpasser brukeropplevelsen og kommunikasjonen til ditt
                medlemskap og dette bruker vi personopplysninger til. Det
                rettslige grunnlaget for å behandle personopplysninger til dette
                formålet er vår berettigede interesse.
              </Body>
            </li>
            <li>
              <Heading tag="h2" size="small">
                Hvordan vi sikrer personopplysningene
              </Heading>

              <Heading tag="h3" size="small">
                Tilgangskontroll
              </Heading>
              <Body>
                Vi oppbevarer personopplysninger på en forsvarlig måte og sikrer
                tilgangen til disse med tilgangskontrollmekanismer slik at
                personopplysningene ikke kommer i uberettigedes hender.
              </Body>

              <Heading tag="h3" size="small">
                Gode internrutiner
              </Heading>
              <Body>
                PCOS Norge har gode rutiner på tilgangskontroll til
                medlemsregisteret, samt behandling av personopplysninger. Kun
                utvalgte styremedlemmer har tilgang til medlemsregisteret.
              </Body>

              <Heading tag="h3" size="small">
                Databehandlere
              </Heading>
              <Body>
                PCOS Norge står i stor grad ansvarlig for behandlingen av dine
                personopplysninger. Likevel jobber vi også med samarbeidsparter
                som av ulike årsaker er nødt til å ha innsyn i noen de samme
                personopplysningene som oss. Andre som har innsyn i dine
                personopplysninger, og som vi har inngått databehandleravtaler
                med inkluderer:
              </Body>
              <ul>
                <li>
                  <Body>
                    Vipps. Personvernserklæringen deres kan du lese{" "}
                    <Link
                      href="https://vipps.no/vilkar/cookie-og-personvern/"
                      target="_blank"
                    >
                      her
                    </Link>
                    .
                  </Body>
                </li>
              </ul>
            </li>
            <li>
              <Heading tag="h2" size="small">
                Dine rettigheter
              </Heading>

              <Heading tag="h3" size="small">
                Rett til innsyn i egne opplysninger
              </Heading>
              <Body>
                Du kan be om en kopi av alle opplysninger vi behandler om deg.
                Ta kontakt på{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no</Link>{" "}
                for å bruke innsynsretten din.
              </Body>

              <Heading tag="h3" size="small">
                Rett til korrigering av personopplysninger
              </Heading>
              <Body>
                Du har rett til å be oss rette eller supplere opplysninger som
                er feilaktige eller misvisende.
              </Body>

              <Heading tag="h3" size="small">
                Retten til sletting av personopplysninger
              </Heading>
              <Body>
                Du har rett til å få dine personopplysninger slettet uten
                ugrunnet opphold. Du kan derfor når som helst be oss slette
                opplysninger om deg selv. Merk at vi uten personopplysninger
                ikke kan behandle medlemskapet ditt i PCOS Norge og du vil
                derfor samtidig bli meldt ut.
              </Body>

              <Heading tag="h3" size="small">
                Retten til å avslutte ditt medlemskap
              </Heading>
              <Body>
                Du kan når som helst melde deg ut av foreningen ved å
                administrere medlemskapet ditt på{" "}
                <Link href="/min-side">Min side</Link> eller ved sende en mail
                til{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no.</Link>.
              </Body>

              <Heading tag="h3" size="small">
                Dataportabilitet
              </Heading>
              <Body>
                Du har rett til å få utlevert dine personopplysninger i et
                strukturert, alminnelig anvendt og maskinlesbart format. Ta
                kontakt på{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no</Link>{" "}
                for å få utlevert dine personopplysninger.
              </Body>

              <Heading tag="h3" size="small">
                Du kan klage på vår behandling av personopplysninger
              </Heading>
              <Body>
                Vi håper du vil si ifra dersom du mener vi ikke overholder
                reglene i personopplysningsloven. Ta kontakt på{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no</Link>{" "}
                for å sende oss en klage. Klagen kan også rettes til
                Datatilsynet dersom du føler at ditt personvern har blitt
                krenket. På Datatilsynets hjemmeside kan du lese mer om hvordan
                du skal gå frem med en eventuell klage.
              </Body>
            </li>

            <li>
              <Heading tag="h2" size="small">
                Salgsvilkår
              </Heading>

              <Heading tag="h3" size="small">
                Avtalen
              </Heading>
              <Body>
                Avtalen består av disse salgsbetingelsene, opplysninger gitt i
                bestillingsløsningen og eventuelt særskilt avtalte vilkår. Ved
                eventuell motstrid mellom opplysningene, går det som særskilt er
                avtalt mellom partene foran, så fremt det ikke strider mot
                ufravikelig lovgivning. Avtalen vil i tillegg bli utfylt av
                relevante lovbestemmelser som regulerer kjøp av varer mellom
                næringsdrivende og forbrukere.
              </Body>

              <Heading tag="h3" size="small">
                Partene
              </Heading>
              <Body>
                Selger er PCOS NORGE - STØTTEFORENING FOR POLYCYSTISK
                OVARIESYNDROM og betegnes i det følgende som selger/selgeren.
                Kjøper er den forbrukeren som foretar bestillingen, og betegnes
                i det følgende som kjøper/kjøperen.
              </Body>

              <Heading tag="h3" size="small">
                Pris
              </Heading>
              <Body>
                Den oppgitte prisen for varen og tjenester er den totale prisen
                kjøper skal betale. Denne prisen inkluderer alle avgifter og
                tilleggskostnader. Ytterligere kostnader som selger før kjøpet
                ikke har informert om, skal kjøper ikke bære.
              </Body>

              <Heading tag="h3" size="small">
                Avtaleinngåelse
              </Heading>
              <Body>
                Avtalen er bindende for begge parter når kjøperen har sendt sin
                bestilling til selgeren. Avtalen er likevel ikke bindende hvis
                det har forekommet skrive- eller tastefeil i tilbudet fra
                selgeren i bestillingsløsningen i nettbutikken eller i kjøperens
                bestilling, og den annen part innså eller burde ha innsett at
                det forelå en slik feil.
              </Body>

              <Heading tag="h3" size="small">
                Medlemskap i PCOS Norge
              </Heading>
              <Body>
                Medlemskapet gjelder i 12 kalendermåneder fra datoen
                medlemskontingenten er mottatt av selger. Kjøper kan når som
                helst si opp sitt medlemskap ved å kontakte selger på{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no</Link>.
                Merk at medlemskontingent for gjenværende måneder ikke blir
                tilbakebetalt kjøper.
              </Body>

              <Heading tag="h3" size="small">
                Betaling
              </Heading>
              <Body>
                Selgeren kan kreve betaling for medlemskontingent fra det
                tidspunkt medlemskapet blir registrert. Selger godtar kun
                betaling med Vipps. Medlemskapet fornyes hvert år på
                registreringsdato, og kjøper vil motta et betalingskrav i Vipps
                tidligst to dager før fornyelsesdato og senest samme dag som
                fornyelsesdato.
              </Body>

              <Heading tag="h3" size="small">
                Levering
              </Heading>
              <Body>
                Levering er skjedd når kjøperen har overtatt tingen, mao. i det
                øyeblikk medlemskapet er registrert i våre systemer.
              </Body>

              <Heading tag="h3" size="small">
                Angrerett
              </Heading>
              <Body>
                Det er ikke angrerett på medlemskontingent og donasjoner. Ved
                spørsmål ta kontakt med{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no.</Link>.
              </Body>

              <Heading tag="h3" size="small">
                Konfliktløsning
              </Heading>
              <Body>
                Klager rettes til selger innen rimelig tid, jf. punkt 9 og 10.
                Partene skal forsøke å løse eventuelle tvister i minnelighet.
                Dersom dette ikke lykkes, kan kjøperen ta kontakt med
                Forbrukertilsynet for mekling. Forbrukertilsynet er tilgjengelig
                på telefon 23 400 600 eller{" "}
                <Link href="www.forbrukertilsynet.no">
                  www.forbrukertilsynet.no
                </Link>
                .
              </Body>
              <br />
              <Body>
                Europa-Kommisjonens klageportal kan også brukes hvis du ønsker å
                inngi en klage. Det er særlig relevant, hvis du er forbruker
                bosatt i et annet EU-land. Klagen inngis her:{" "}
                <Link href="http://ec.europa.eu/odr">
                  http://ec.europa.eu/odr
                </Link>
                .
              </Body>
            </li>
          </ol>
          <Body></Body>
        </Content>
      </Main>

      <Footer />
    </PageContainer>
  )
}

export default Personvernerklæring
