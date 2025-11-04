import { ArrowRight } from "@phosphor-icons/react"
import { PortableTextBlock } from "@portabletext/types"
import classNames from "classnames"
import { differenceInDays, format } from "date-fns"
import { nb } from "date-fns/locale"
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next"
import React from "react"

import { BlockContentContainer } from "components/BlockContentContainer"
import { Body } from "components/Body"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Content } from "components/Content"
import { Footer } from "components/Footer"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Heading } from "components/Heading"
import { Link } from "components/Link"
import { Main } from "components/Main"
import { PageContainer } from "components/PageContainer"
import { ToggleButton } from "components/ToggleButton"
import { getClient } from "io/sanity/client"
import { SanityImageAsset } from "types/sanity"
import { slugify } from "util/string"

import { Likeperson } from "./Likeperson"

import styles from "./aktiviteter.module.css"

const formatDate = (date: Date): string => {
  return format(date, "dd. MMMM yyyy", { locale: nb })
}

const formatTime = (date: Date): string => {
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`
}

const formatActivityDates = (start: string, end?: string): string => {
  if (!end) {
    const date = new Date(start)
    const formattedDate = formatDate(date)
    const formattedTime = formatTime(date)
    return `${formattedDate} ${formattedTime}`
  }

  const startDate = new Date(start)
  const endDate = new Date(end)

  if (startDate.getDate() === endDate.getDate()) {
    return `${formatDate(startDate)} ${formatTime(startDate)} - ${formatTime(
      endDate,
    )}`
  }

  return `${formatDate(startDate)} ${formatTime(startDate)} - ${formatDate(
    endDate,
  )} ${formatTime(endDate)}`
}

type Activity = {
  _id: string
  title: string
  description?: string
  start: string
  end?: string
  location?: string
  registrationLink?: string
  digital: boolean
  foredrag: boolean
}

type Likeperson = {
  _id: string
  name: string
  picture: SanityImageAsset
  region: string
}

type Filter = "alle" | "digitalt" | "fysisk" | "foredrag"

interface AktiviteterProps {
  elements: {
    title: string
    content: PortableTextBlock[]
  }[]
  activities: Activity[]
  likepersoner: Likeperson[]
}

const Aktiviteter: NextPage<AktiviteterProps & PreviewProps> = ({
  elements,
  activities,
  likepersoner,
}) => {
  const [filter, setFilter] = React.useState<Filter>("alle")

  return (
    <PageContainer>
      <Head />
      <Header className={styles.header} />
      <Main>
        <Content>
          <Breadcrumbs
            links={[
              { href: "/", label: "Hjem" },
              { href: `/aktiviteter`, label: "Aktiviteter" },
            ]}
          />
        </Content>
        <Content className={styles.content}>
          <div className={styles.innholdsfortegnelse}>
            <ul>
              <li>
                <a href="#kommende-aktiviteter">
                  Kommende aktiviteter
                  <ArrowRight size={24} />
                </a>
              </li>
              {elements.slice(0, 2).map((it, i) => (
                <li key={i}>
                  <a href={`#${slugify(it.title)}`}>
                    {it.title}
                    <ArrowRight size={24} />
                  </a>
                </li>
              ))}
              <li>
                <a href="#våre-likepersoner">
                  Våre likepersoner
                  <ArrowRight size={24} />
                </a>
              </li>
              {elements.slice(2).map((it, i) => (
                <li key={i}>
                  <a href={`#${slugify(it.title)}`}>
                    {it.title}
                    <ArrowRight size={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading tag="h2" size="medium" id="kommende-aktiviteter">
              Kommende aktiviteter
            </Heading>
            <div className={styles.sectionContent}>
              <Body>
                PCOS Norge tilbyr fysiske og digitale arrangementer og foredrag,
                i tillegg til fysiske treff med våre likepersoner flere steder i
                landet. Vi holder også 2-3 digitale samtalegrupper hver måned
                som alle i hele landet kan delta på. Følg gjerne med i sosiale
                medier for påminnelser og informasjon om arrangementer og
                foredrag.
              </Body>
              <div className={styles.filterButtons}>
                <ToggleButton
                  onClick={() => setFilter("alle")}
                  toggled={filter === "alle"}
                >
                  Alle
                </ToggleButton>
                <ToggleButton
                  onClick={() => setFilter("fysisk")}
                  toggled={filter === "fysisk"}
                >
                  Fysisk
                </ToggleButton>
                <ToggleButton
                  onClick={() => setFilter("digitalt")}
                  toggled={filter === "digitalt"}
                >
                  Digitalt
                </ToggleButton>
                <ToggleButton
                  onClick={() => setFilter("foredrag")}
                  toggled={filter === "foredrag"}
                >
                  Foredrag
                </ToggleButton>
              </div>
              <ul className={styles.aktiviteter}>
                {activities
                  .slice(0)
                  .sort(
                    (a, b) =>
                      new Date(a.start).getTime() - new Date(b.start).getTime(),
                  )
                  .filter((it) => differenceInDays(it.start, new Date()) >= 0)
                  .filter(
                    (it) =>
                      filter === "alle" ||
                      (filter === "digitalt" && it.digital) ||
                      (filter === "fysisk" && !it.digital) ||
                      (filter === "foredrag" && it.foredrag),
                  )
                  .map((it) => (
                    <li key={it._id} className={styles.aktivitet}>
                      <Body className={styles.time}>
                        {formatActivityDates(it.start, it.end)}
                      </Body>
                      <Body className={styles.title}>{it.title}</Body>
                      {it.description && <Body>{it.description}</Body>}
                      {it.location && <Body>{it.location}</Body>}
                      {it.registrationLink ? (
                        <Link
                          className={styles.registrationLink}
                          href={it.registrationLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Påmelding
                        </Link>
                      ) : (
                        <Body className={styles.details}>Ingen påmelding</Body>
                      )}
                      <Body></Body>
                    </li>
                  ))}
              </ul>
            </div>
            {elements.slice(0, 2).map((it, i) => (
              <React.Fragment key={i}>
                <Heading
                  tag={i === 0 ? "h1" : "h2"}
                  size="medium"
                  id={slugify(it.title)}
                >
                  {it.title}
                </Heading>
                <div className={styles.sectionContent}>
                  <BlockContentContainer blocks={it.content} />
                </div>
              </React.Fragment>
            ))}

            <Heading tag="h2" size="medium" id="våre-likepersoner">
              Våre likepersoner
            </Heading>
            <div
              className={classNames(styles.sectionContent, styles.likepersoner)}
            >
              {likepersoner.map((it) => (
                <Likeperson key={it._id} {...it} />
              ))}
            </div>

            {elements.slice(2).map((it, i) => (
              <React.Fragment key={i}>
                <Heading
                  tag={i === 0 ? "h1" : "h2"}
                  size="medium"
                  id={slugify(it.title)}
                >
                  {it.title}
                </Heading>
                <div className={styles.sectionContent}>
                  <BlockContentContainer blocks={it.content} />
                </div>
              </React.Fragment>
            ))}
          </div>
        </Content>
      </Main>
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<AktiviteterProps>
> => {
  const response = await getClient().fetch(
    `
    {
      "page": *[_type == "tableOfContentsPage" && id.current == $slug][0] {
        elements
      },
      "activities": *[_type == "activity"] {
        _id,
        title,
        description,
        start,
        end,
        location,
        registrationLink,
        digital,
        foredrag,
      },
      "likepersoner": *[_type == "likeperson"] {
        _id,
        name,
        picture,
        region,
      }
    }
    `,
    { slug: "aktiviteter" },
  )

  return {
    props: {
      elements: response.page.elements,
      activities: response.activities,
      likepersoner: response.likepersoner,
    },
  }
}

export default Aktiviteter
