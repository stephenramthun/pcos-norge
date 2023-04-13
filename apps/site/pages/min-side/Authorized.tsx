import { useRouter } from "next/router"
import { Session } from "next-auth"
import React, { useCallback, useEffect, useState } from "react"

import { Content } from "components/Content"
import { Heading } from "components/Heading"
import { useAsyncPolling } from "hooks/useAsyncPolling"
import { isUser } from "types/guards"

import { AuthorizedWithAgreement } from "./AuthorizedWithAgreement"
import { AuthorizedWithoutAgreement } from "./AuthorizedWithoutAgreement"
import { RegisterDialog } from "./RegisterDialog"
import { UserInfo } from "./UserInfo"
import { WelcomeDialog } from "./WelcomeDialog"

import styles from "./min-side.module.css"

const fetchData = (): Promise<UserData> => {
  return fetch("/api/min-side/data", { method: "GET" }).then((res) =>
    res.json(),
  )
}

interface AuthorizedProps {
  user: Session["user"]
}

export const Authorized: React.FC<AuthorizedProps> = ({ user }) => {
  const router = useRouter()
  const [data, setData] = useState<UserData | null>(null)

  useEffect(() => {
    fetchData().then(setData)
  }, [])

  const updateData = useCallback(async () => {
    if (data?.agreement?.status === "PENDING") {
      await fetch("/api/medlemskap/oppdater", {
        method: "POST",
        body: JSON.stringify({ agreementId: data.agreement.id }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.updated) {
            fetchData().then(setData)
          }
        })
    }
  }, [data])

  useAsyncPolling(updateData, {
    delay: 3000,
    interval: 2000,
    active: data
      ? data.agreement !== null && data.agreement.status === "PENDING"
      : undefined,
  })

  if (!isUser(user)) {
    return null
  }

  const agreement = data?.agreement

  const hasAgreement =
    agreement?.status === "ACTIVE" || agreement?.status === "PENDING"

  return (
    <Content className={styles.content}>
      {data && !hasAgreement && <RegisterDialog givenName={user.givenName} />}
      {router.query.welcome && <WelcomeDialog givenName={user.givenName} />}
      <Heading tag="h1" size="medium-large">
        Min side
      </Heading>
      <UserInfo
        givenName={user.givenName}
        familyName={user.familyName}
        streetAddress={user.streetAddress}
        postalCode={user.postalCode}
        region={user.region}
        email={user.email}
        phoneNumber={user.phoneNumber}
      />
      <hr />
      {data && hasAgreement && (
        <AuthorizedWithAgreement user={user} data={data} />
      )}
      {!hasAgreement && <AuthorizedWithoutAgreement />}
    </Content>
  )
}
