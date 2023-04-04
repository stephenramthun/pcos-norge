import React from "react"
import styles from "./min-side.module.css"
import { Body } from "components/Body"
import dayjs from "dayjs"
import { Loader } from "components/Loader"
import { Checkbox } from "components/Checkbox"
import { capitalize } from "../../util/string"
import { Button } from "components/Button"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"

interface Props {
  user: User
  data: UserData
}

export const AuthorizedWithAgreement: React.FC<Props> = ({ user, data }) => {
  const router = useRouter()

  return (
    <>
      <div className={styles.grid}>
        <>
          <Body>Medlemskapsstatus</Body>
          {data.agreement?.status === "ACTIVE" && (
            <Body>
              Aktiv, fornyes{" "}
              {dayjs(data.agreement.start).add(1, "year").format("DD.MM.YYYY")}
            </Body>
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
          <Button
            variant="secondary"
            onClick={() =>
              router.push(
                `/api/medlemskap/avslutt?agreementId=${data.agreement?.id}`,
              )
            }
          >
            Avslutt medlemskap
          </Button>
        )}
      </span>
    </>
  )
}
