import { Check, Pencil, PencilSlash } from "@phosphor-icons/react"
import React, { FormEvent, useRef, useState } from "react"

import { Body } from "components/Body"

import { EditButton } from "./EditButton"

import styles from "./Address.module.css"

type AddressData = {
  streetAddress: string
  region: string
  postalCode: string
}

type Props = AddressData & {
  onSave: (data: AddressData) => void
}

export const Address: React.FC<Props> = ({
  streetAddress,
  region,
  postalCode,
  onSave,
}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isEditing, setIsEditing] = useState(false)

  const startEditing = (): void => {
    setIsEditing(true)
  }

  const cancelEditing = (): void => {
    setIsEditing(false)
  }

  const stopEditingAndSave = (event: FormEvent): void => {
    event.preventDefault()
    const streetAddress = formRef.current?.elements.namedItem(
      "streetAddress",
    ) as HTMLInputElement
    const region = formRef.current?.elements.namedItem(
      "region",
    ) as HTMLInputElement
    const postalCode = formRef.current?.elements.namedItem(
      "postalCode",
    ) as HTMLInputElement
    if (streetAddress && region && postalCode) {
      onSave({
        streetAddress: streetAddress.value,
        region: region.value,
        postalCode: postalCode.value,
      })
      setIsEditing(false)
    }
  }

  return (
    <form
      className={styles.container}
      onSubmit={stopEditingAndSave}
      ref={formRef}
    >
      <span className={styles.flexColumn}>
        {isEditing ? (
          <>
            <input
              name="streetAddress"
              type="text"
              defaultValue={streetAddress}
              required
            />
            <input
              type="text"
              inputMode="numeric"
              defaultValue={postalCode}
              pattern="^[0-9]{4}$"
              required
            />
            <input type="text" defaultValue={region} required />
          </>
        ) : (
          <>
            <Body>{streetAddress}</Body>
            <Body>
              {postalCode} {region}
            </Body>
          </>
        )}
      </span>
      {isEditing && (
        <>
          <EditButton type="submit">
            <Check size={20} />
          </EditButton>
          <EditButton onClick={cancelEditing}>
            <PencilSlash size={20} />
          </EditButton>
        </>
      )}
      {!isEditing && (
        <EditButton onClick={startEditing}>
          <Pencil size={20} />
        </EditButton>
      )}
    </form>
  )
}
