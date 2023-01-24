import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { Session, unstable_getServerSession } from "next-auth"

import { authOptions } from "./api/auth/[...nextauth]"
import { Head } from "components/Head"
import { Header } from "components/Header"
import { Content } from "components/Content"
import { PageContainer } from "components/PageContainer"
import { Breadcrumbs } from "components/Breadcrumbs"
import { VippsButton } from "components/VippsButton"
import { Heading } from "components/Heading"
import { Footer } from "components/Footer"
import { Button } from "components/Button"
import { Main } from "components/Main"
import { Body } from "components/Body"
import { isUser } from "types/guards"
import { useAsyncPolling } from "hooks/useAsyncPolling"

import styles from "./min-side.module.css"
import { MinSideService } from "@io/api/minSideService"

const Unauthorized: React.FC = () => {
  return (
    <Content className={styles.content}>
      <Heading tag="h1" size="medium-large">
        Min side
      </Heading>
      <Body>
        Velkommen tilbake 👋
        <br />
        Du må logge inn for å se denne siden
      </Body>
      <VippsButton variant="login" />
    </Content>
  )
}

const fetchData = (): Promise<MinSideData> => {
  return fetch("/api/min-side/data", { method: "GET" }).then((res) =>
    res.json(),
  )
}

interface AuthorizedProps {
  user: Session["user"]
  initialData: MinSideData
}

const Authorized: React.FC<AuthorizedProps> = ({ user, initialData }) => {
  const [data, setData] = useState<MinSideData>(initialData)

  useEffect(() => {
    fetchData().then(setData)
  }, [])

  const router = useRouter()

  useAsyncPolling(
    async () => {
      if (data?.pendingAgreement) {
        await fetch("/api/medlemskap/oppdater", {
          method: "POST",
          body: JSON.stringify({ agreementId: data.pendingAgreement.id }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.updated) {
              fetchData().then(setData)
            }
          })
      }
    },
    {
      delay: 3000,
      interval: 2000,
      active: data ? data.pendingAgreement !== null : undefined,
    },
  )

  if (!isUser(user) || !data) {
    return null
  }

  const { activeAgreement, pendingAgreement } = data

  const hasActiveOrPendingAgreement = pendingAgreement || activeAgreement

  return (
    <Content className={styles.content}>
      {!hasActiveOrPendingAgreement && (
        <article className={styles.registerDialog}>
          <Body className={styles.bold}>Hei, {user.givenName}</Body>
          <Body>
            Ønsker du å støtte oss i arbeidet vårt for et bedre helsetilbud for
            alle med PCOS i Norge? Forny medlemskapet ditt ved å klikke på
            knappen under.
          </Body>
          <Body>Medlemskap koster 200,- per år.</Body>
          <VippsButton
            variant="register"
            onClick={() => router.push("/api/medlemskap/registrer")}
          />
        </article>
      )}
      <Heading tag="h1" size="medium-large">
        Min side
      </Heading>
      <div className={styles.grid}>
        <Body>Navn</Body>
        <Body>{user.name}</Body>
        <Body>Adresse</Body>
        <span className={styles.flexColumn}>
          <Body>{user.streetAddress}</Body>
          <Body>
            {user.postalCode} {user.region}
          </Body>
        </span>
        <Body>Epost</Body>
        <Body>{user.email}</Body>
      </div>
      <hr />
      <div className={styles.grid}>
        <>
          <Body>Medlemskapsstatus</Body>
          {activeAgreement && (
            <Body>
              Aktiv, fornyes{" "}
              {dayjs(activeAgreement.start).add(1, "year").format("DD.MM.YYYY")}
            </Body>
          )}
          {!hasActiveOrPendingAgreement && <Body>Inaktiv</Body>}
          {pendingAgreement && <Body>Venter</Body>}
        </>
        <Body>Medlem siden</Body>
        <Body>
          {new Intl.DateTimeFormat("nb-NO").format(new Date(user.createdAt))}
        </Body>
      </div>
      <span className={styles.buttons}>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Logg ut</Button>
        {activeAgreement && (
          <Button
            variant="secondary"
            onClick={() =>
              router.push(
                `/api/medlemskap/avslutt?agreementId=${activeAgreement.id}`,
              )
            }
          >
            Avslutt medlemskap
          </Button>
        )}
      </span>
    </Content>
  )
}

interface MinSideProps {
  initialData: MinSideData
}

const MinSide: NextPage<MinSideProps> = ({ initialData }) => {
  const { data: session } = useSession()

  return (
    <PageContainer>
      <Head />
      <Header />

      <Content>
        <Breadcrumbs
          links={[
            { label: "Hjem", href: "/" },
            { label: "Min side", href: "min-side" },
          ]}
        />
      </Content>

      <Main>
        {session && (
          <Authorized user={session.user} initialData={initialData} />
        )}
        {!session && <Unauthorized />}
      </Main>

      <Footer />
    </PageContainer>
  )
}

type ServerSideProps = GetServerSidePropsResult<{
  session: VippsSession | null
  initialData: MinSideData
}>

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<ServerSideProps> {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  )

  if (!session || !isUser(session.user)) {
    return {
      props: {
        session: null,
        initialData: {
          pendingAgreement: null,
          activeAgreement: null,
        },
      },
    }
  }

  const initialData = await MinSideService.getData(session.user.id)

  return {
    props: {
      session: {
        ...session,
        user: {
          ...session.user,
          image: null,
          createdAt: dayjs(session.user.createdAt).format("YYYY-MM-DD"),
        },
      },
      initialData,
    },
  }
}

export default MinSide