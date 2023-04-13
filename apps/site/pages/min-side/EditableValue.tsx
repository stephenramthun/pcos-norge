import { Check, Pencil, PencilSlash } from "@phosphor-icons/react"
import React, { useLayoutEffect, useRef, useState } from "react"

import { Body } from "components/Body"

import { EditButton } from "./EditButton"

import styles from "./EditableValue.module.css"

interface EditableValueProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  initialValue: string
  onSave: (value: string) => void
}

export const EditableValue: React.FC<EditableValueProps> = ({
  initialValue,
  onSave,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(initialValue)
  const [dirty, setDirty] = useState(value)
  const [isEditing, setIsEditing] = useState(false)

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDirty(event.target.value)
  }

  const startEditing = (): void => {
    setIsEditing(true)
  }

  const cancelEditing = (): void => {
    setDirty(value)
    setIsEditing(false)
  }

  const stopEditingAndSave = (): void => {
    setValue(dirty)
    onSave(dirty)
    setIsEditing(false)
  }

  useLayoutEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [inputRef, isEditing])

  return (
    <span className={styles.container}>
      {isEditing ? (
        <input
          ref={inputRef}
          value={dirty}
          onChange={changeValue}
          {...inputProps}
        />
      ) : (
        <Body>{dirty}</Body>
      )}
      {isEditing && (
        <>
          <EditButton onClick={stopEditingAndSave}>
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
    </span>
  )
}
