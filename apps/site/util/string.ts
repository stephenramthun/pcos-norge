export const capitalize = (value: string): string => {
  if (value.length === 0) {
    return value
  }

  return `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`
}

export const asPhoneNumber = (value: string): string => {
  if (value.length === 10) {
    return `+${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(
      5,
      7,
    )} ${value.slice(7)}`
  }

  if (value.length === 8) {
    return `${value.slice(0, 3)} ${value.slice(3, 5)} ${value.slice(5)}`
  }

  return value
}

export const slugify = (text: string): string =>
  text.replaceAll(" ", "-").toLowerCase()
