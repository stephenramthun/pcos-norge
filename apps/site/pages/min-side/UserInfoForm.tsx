import { Check, PencilSlash } from "@phosphor-icons/react"
import classNames from "classnames"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

import { Body } from "components/Body"
import { Button } from "components/Button"
import { ErrorMessage } from "components/ErrorMessage"
import {
  validateEmail,
  validatePhoneNumber,
  validatePostalCode,
} from "util/form"

import styles from "./UserInfoForm.module.css"

interface Props {
  givenName: string
  familyName: string
  streetAddress: string
  postalCode: string
  region: string
  email: string
  phoneNumber: string
  onSubmit: () => Promise<void>
  closeForm: () => void
}

export const UserInfoForm: React.FC<Props> = ({
  givenName,
  familyName,
  streetAddress,
  postalCode,
  region,
  email,
  phoneNumber,
  onSubmit,
  closeForm,
}) => {
  const { register, formState, handleSubmit, getValues } = useForm()
  const [error, setError] = useState<string | null>(null)

  const submitForm = async (): Promise<void> => {
    if (Object.keys(formState.errors).length > 0) {
      return
    }

    setError(null)

    fetch("/api/medlemskap/info", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getValues()),
    })
      .then(async (res) => {
        if (res.ok) {
          await onSubmit()
          closeForm()
        } else {
          throw Error()
        }
      })
      .catch(() => {
        setError("Det skjedde en feil. Prøv igjen senere")
      })
  }

  return (
    <form className={styles.grid} onSubmit={handleSubmit(submitForm)}>
      <label className={styles.label}>
        <Body>Fornavn</Body>
        <input
          defaultValue={givenName}
          aria-invalid={!!formState.errors.givenName}
          {...register("givenName", { required: true })}
        />
        {formState.errors.givenName && (
          <ErrorMessage className={styles.errorMessage} role="alert">
            Fyll inn fornavn
          </ErrorMessage>
        )}
      </label>
      <label className={styles.label}>
        <Body>Etternavn</Body>
        <input
          defaultValue={familyName}
          aria-invalid={!!formState.errors.familyName}
          {...register("familyName", { required: true })}
        />
        {formState.errors.familyName && (
          <ErrorMessage className={styles.errorMessage} role="alert">
            Fyll inn etternavn
          </ErrorMessage>
        )}
      </label>
      <label className={styles.label}>
        <Body>Gateadresse</Body>
        <input
          defaultValue={streetAddress}
          aria-invalid={!!formState.errors.streetAddress}
          {...register("streetAddress", { required: true })}
        />
        {formState.errors.streetAddress && (
          <ErrorMessage className={styles.errorMessage} role="alert">
            Fyll inn gateadresse
          </ErrorMessage>
        )}
      </label>
      <label className={styles.label}>
        <Body>Postnummer</Body>
        <input
          defaultValue={postalCode}
          aria-invalid={!!formState.errors.postalCode}
          {...register("postalCode", { validate: validatePostalCode })}
        />
        {formState.errors.postalCode?.message && (
          <ErrorMessage className={styles.errorMessage} role="alert">
            {formState.errors.postalCode.message as string}
          </ErrorMessage>
        )}
      </label>
      <label className={styles.label}>
        <Body>Sted</Body>
        <input
          defaultValue={region}
          aria-invalid={!!formState.errors.region}
          {...register("region", { required: true })}
        />
        {formState.errors.region && (
          <ErrorMessage className={styles.errorMessage} role="alert">
            Fyll inn stedsnavn
          </ErrorMessage>
        )}
      </label>
      <label className={styles.label}>
        <Body>Epost</Body>
        <input
          defaultValue={email}
          aria-invalid={!!formState.errors.email}
          {...register("email", {
            validate: validateEmail,
          })}
        />
        {formState.errors.email?.message && (
          <ErrorMessage className={styles.errorMessage} role="alert">
            {formState.errors.email.message as string}
          </ErrorMessage>
        )}
      </label>
      <label className={styles.label}>
        <Body>Telefon</Body>
        <input
          defaultValue={phoneNumber}
          aria-invalid={!!formState.errors.phoneNumber}
          {...register("phoneNumber", {
            validate: validatePhoneNumber,
          })}
        />
        {formState.errors.phoneNumber?.message && (
          <ErrorMessage className={styles.errorMessage} role="alert">
            {formState.errors.phoneNumber.message as string}
          </ErrorMessage>
        )}
      </label>
      <span className={styles.buttons}>
        <Button type="submit">
          Lagre kontaktinfo
          <Check size={20} />
        </Button>
        <Button type="button" variant="secondary" onClick={closeForm}>
          Avbryt <PencilSlash size={20} />
        </Button>
      </span>
      {error && (
        <ErrorMessage
          className={classNames(styles.errorMessage, styles.allColumns)}
          role="alert"
        >
          {error}
        </ErrorMessage>
      )}
    </form>
  )
}
