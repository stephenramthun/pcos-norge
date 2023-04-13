export const validatePostalCode = (value: string): true | string => {
  return value.match(/^\d{4}$/) ? true : "Fyll inn en postkode på 4 siffer"
}

export const validateEmail = (value: string): true | string => {
  return value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ? true
    : "Fyll inn en gyldig epostadresse"
}

export const validatePhoneNumber = (value: string): true | string => {
  return value.replace(/\s+/g, "").match(/^(\+47|47)?\d{8}$/)
    ? true
    : "Fyll inn et gyldig norsk telefonnummer"
}
