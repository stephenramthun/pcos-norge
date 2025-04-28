import dayjs from "dayjs"
import { signOut } from "next-auth/react"
import React from "react"

import { Body } from "components/Body"
import { Button } from "components/Button"
import { Checkbox } from "components/Checkbox"
import { Loader } from "components/Loader"
import { capitalize } from "util/string"

import { AvsluttMedlemskapButton } from "./AvsluttMedlemskapButton"

import styles from "./min-side.module.css"

const renewalDate = (agreement: Agreement): string => {
  return dayjs(agreement.paidDate).add(1, "year").format("DD.MM.YYYY")
}

interface Props {
  user: User
  data: UserData
}

export const AuthorizedWithAgreement: React.FC<Props> = ({ user, data }) => {
  return (
    <>
      <div className={styles.grid}>
        <>
          <Body>Medlemskapsstatus</Body>
          {data.agreement?.status === "ACTIVE" && !!data.agreement.paidDate && (
            <Body>Aktiv, fornyes {renewalDate(data.agreement)}</Body>
          )}
          {data.agreement?.status === "PENDING" && <Loader variant="dark" />}
        </>
        <Body>Medlem siden</Body>
        <Body>
          {new Intl.DateTimeFormat("nb-NO").format(new Date(user.createdAt))}
        </Body>
      </div>
      <hr />
      <fieldset>
        <legend>Jeg ønsker å motta følgende eposter fra PCOS Norge:</legend>
        {["MEDLEMSBREV", "NYHETSBREV"].map((type) => (
          <Checkbox
            key={type}
            label={capitalize(type)}
            defaultChecked={data.subscriptions.includes(type)}
            onChange={(event) => {
              fetch(`/api/medlemskap/email/${type}`, {
                method: event.target.checked ? "PUT" : "DELETE",
              })
            }}
          />
        ))}
      </fieldset>
      <span className={styles.buttons}>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Logg ut</Button>
        {data.agreement?.status === "ACTIVE" && (
          <AvsluttMedlemskapButton agreementId={data.agreement.id} />
        )}
      </span>
    </>
  )
}
