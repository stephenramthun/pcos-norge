import { HandCoins, Users } from "@phosphor-icons/react"
import { getUserAgreements, isAdmin } from "db/prisma/dao/admin"
import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next"
import Head from "next/head"
import { getSession } from "next-auth/react"
import React from "react"

import { Body } from "components/Body"
import { Card } from "components/Card"
import { Logo } from "components/Logo"
import { MenuLink } from "components/MenuLink"
import { Table } from "components/Table"

import styles from "./index.module.css"

interface Props {
  users: Awaited<ReturnType<typeof getUserAgreements>>
}

const Home: NextPage<Props> = ({ users }) => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Admin | PCOS Norge</title>
        <meta name="description" content="Administrasjonsside for PCOS-Norge" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <header>
          <Logo />
        </header>
        <ul className={styles.menu}>
          <li>
            <MenuLink href="/" active>
              <Users />
              Medlemmer
            </MenuLink>
          </li>
          <li>
            <MenuLink href="/" active>
              <HandCoins />
              Betalinger
            </MenuLink>
          </li>
        </ul>
      </nav>
      <main>
        <Card>
          <Table>
            <thead>
              <tr>
                <th>
                  <Body>Navn</Body>
                </th>
                <th>
                  <Body>Epost</Body>
                </th>
                <th>
                  <Body>Status</Body>
                </th>
                <th>
                  <Body>Opprettet</Body>
                </th>
                <th>
                  <Body>Betalt</Body>
                </th>
                <th>
                  <Body>Betalings-ID</Body>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Body>{user.name}</Body>
                  </td>
                  <td>
                    <Body>{user.email}</Body>
                  </td>
                  <td>
                    <Body>{user.agreement?.status}</Body>
                  </td>
                  <td>
                    <Body>
                      {new Intl.DateTimeFormat("no-NB").format(
                        new Date(user.createdAt),
                      )}
                    </Body>
                  </td>
                  <td>
                    <Body>
                      {user.agreement?.paidDate &&
                        new Intl.DateTimeFormat("no-NB").format(
                          new Date(user.agreement.paidDate),
                        )}
                    </Body>
                  </td>
                  <td>
                    <Body>{user.agreement?.chargeId}</Body>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </main>
      <footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<GetServerSidePropsResult<Props>> => {
  const session = (await getSession(context)) as VippsSession | null

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    }
  }

  if (process.env.NODE_ENV !== "development" && !isAdmin(session.user.id)) {
    return {
      notFound: true,
    }
  }

  // const users = await getUserAgreements()

  const users: Awaited<ReturnType<typeof getUserAgreements>> = []

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  }
}

export default Home
