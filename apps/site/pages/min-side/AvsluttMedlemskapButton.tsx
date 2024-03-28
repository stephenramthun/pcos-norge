import { useRouter } from "next/router"
import React, { useRef, useState } from "react"
import ReactModal from "react-modal"

import { Body } from "components/Body"
import { Button } from "components/Button"
import { Checkbox } from "components/Checkbox"
import { Heading } from "components/Heading"

import styles from "./AvsluttMedlemskapButton.module.css"

ReactModal.setAppElement("#__next")

type Props = {
  agreementId: string
}

export const AvsluttMedlemskapButton: React.FC<Props> = ({ agreementId }) => {
  const router = useRouter()
  const checkboxRef = useRef<HTMLInputElement>(null)
  const [showModal, setShowModal] = useState(false)
  const [showError, setShowError] = useState(false)

  const avsluttMedlemskap = () => {
    router.push(`/api/medlemskap/avslutt?agreementId=${agreementId}`)
  }

  const lukkModal = () => {
    setShowModal(false)
    setShowError(false)
  }

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        onClick={() => setShowModal(true)}
      >
        Avslutt medlemskap
      </Button>
      <ReactModal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={showModal}
        onRequestClose={lukkModal}
      >
        <Heading tag="h1" size="medium">
          Obs!
        </Heading>
        <Body>Er du sikker på at du ønsker å avslutte ditt medlemskap?</Body>
        <Checkbox
          ref={checkboxRef}
          onChange={() => {
            setShowError(false)
          }}
          label="Jeg bekrefter at jeg ønsker å avslutte mitt medlemskap"
        />
        {showError && (
          <Body className={styles.error}>
            Du må huke av for at du ønsker å avslutte medlemskapet ditt
          </Body>
        )}
        <div className={styles.buttons}>
          <Button
            variant="destructive"
            onClick={() => {
              if (checkboxRef.current?.checked) {
                avsluttMedlemskap()
              } else {
                setShowError(true)
              }
            }}
          >
            Avslutt medlemskap
          </Button>
          <Button variant="secondary" onClick={lukkModal}>
            Lukk og gå tilbake
          </Button>
        </div>
      </ReactModal>
    </>
  )
}
