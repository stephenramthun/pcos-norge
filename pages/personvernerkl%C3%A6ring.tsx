import { NextPage } from "next"

import { Head } from "@components/Head"
import { Main } from "@components/Main"
import { Body } from "@components/Body"
import { Link } from "@components/Link"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import { Content } from "@components/Content"
import { Heading } from "@components/Heading"
import { Breadcrumbs } from "@components/Breadcrumbs"
import { PageContainer } from "@components/PageContainer"

import styles from "./personvernerklæring.module.css"

const Personvernerklæring: NextPage = () => {
  return (
    <PageContainer>
      <Head />
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
                  <Body>Medlemsnummer</Body>
                </li>
              </ul>
              <ul>
                <Body>
                  Ved påmelding til nyhetsbrevet vårt registrerer vi følgende
                  informasjon om deg:
                </Body>
                <li>
                  <Body>E-postadresse</Body>
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
                med deg, det vil si når du har registrert deg som medlem hos oss
                eller meldt deg på nyhetsbrevet vårt. Det rettslige grunnlaget
                for å behandle personopplysninger til dette formålet er at
                behandlingen er nødvendig for å oppfylle en avtale med deg.
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
                    Vipps. Vipps har sin egen personvernserklæring som du kan
                    lese{" "}
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
                opplysninger om deg selv. Men merk at informasjon som vi er
                pålagt beholde av hensyn til andre rettslige forpliktelser (som
                for eksempel bokføringsloven) ikke vil bli slettet.
              </Body>

              <Heading tag="h3" size="small">
                Retten til å avslutte ditt medlemskap
              </Heading>
              <Body>
                Du kan når som helst melde deg ut av foreningen ved å sende en
                mail til{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no.</Link>.
                Ved utmelding vil opplysningene om deg bli oppbevart i vårt
                medlemsregister i 5 år grunnet krav om oppbevaring av
                regnskapsbilag i bokføringsloven.
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
                Medlemsskap i PCOS Norge
              </Heading>
              <Body>
                Medlemsskapet gjelder i 12 kalendermåneder fra datoen
                medlemskontingenten er mottatt. Du kan når som helst si opp ditt
                medlemsskap ved å kontakte oss på{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no</Link>.
                Merk at medlemskontingent for gjenværende måneder ikke blir
                tilbakebetalt.
              </Body>

              <Heading tag="h3" size="small">
                Betaling
              </Heading>
              <Body>
                Selgeren kan kreve betaling for medlemskontingent fra det
                tidspunkt medlemsskapet blir registrert.
              </Body>

              <Heading tag="h3" size="small">
                Angrerett
              </Heading>
              <Body>
                Det er ikke angrerett på medlemskontingent og donasjoner. Ved
                spørsmål ta kontakt med{" "}
                <Link href="mailto:post@pcosnorge.no">post@pcosnorge.no.</Link>.
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
