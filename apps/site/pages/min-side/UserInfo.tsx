import { Pencil } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"

import { Alert } from "components/Alert"
import { Body } from "components/Body"
import { asPhoneNumber } from "util/string"

import { UserInfoForm } from "./UserInfoForm"

import styles from "./UserInfo.module.css"

interface Props {
  givenName: string
  familyName: string
  streetAddress: string
  postalCode: string
  region: string
  email: string
  phoneNumber: string
}

export const UserInfo: React.FC<Props> = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [
    {
      givenName,
      familyName,
      streetAddress,
      postalCode,
      region,
      email,
      phoneNumber,
    },
    setData,
  ] = useState(props)
  const [didSubmit, setDidSubmit] = useState(false)

  useEffect(() => {
    if (didSubmit) {
      setTimeout(() => {
        setDidSubmit(false)
      }, 5000)
    }
  }, [didSubmit])

  const startEditing = (): void => {
    setIsEditing(true)
  }

  const cancelEditing = (): void => {
    setIsEditing(false)
  }

  const fetchUpdatedData = (): Promise<void> => {
    setDidSubmit(false)
    return fetch("/api/medlemskap/info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error()
        }
      })
      .then((data) => {
        setDidSubmit(true)
        setData(data)
      })
      .catch(() => {
        location.reload()
      })
  }

  return (
    <span className={styles.container}>
      {isEditing ? (
        <UserInfoForm
          givenName={givenName}
          familyName={familyName}
          streetAddress={streetAddress}
          postalCode={postalCode}
          region={region}
          email={email}
          phoneNumber={phoneNumber}
          onSubmit={fetchUpdatedData}
          closeForm={cancelEditing}
        />
      ) : (
        <>
          <div className={styles.grid}>
            <Body>Navn</Body>
            <Body>{`${givenName} ${familyName}`}</Body>
            <Body>Adresse</Body>
            <Body>
              {streetAddress}, {postalCode}, {region}
            </Body>
            <Body>Epost</Body>
            <Body>{email}</Body>
            <Body>Telefon</Body>
            <Body>{asPhoneNumber(phoneNumber)}</Body>
            <span className={styles.buttons}>
              <button className={styles.editButton} onClick={startEditing}>
                Rediger kontaktinfo <Pencil size={20} />
              </button>
              <AnimatePresence>
                {didSubmit && (
                  <motion.div
                    key="oppdatert-kontaktinfo"
                    style={{ position: "absolute" }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                  >
                    <Alert variant="success">
                      <Body>Endringen var vellykket</Body>
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </div>
        </>
      )}
    </span>
  )
}
