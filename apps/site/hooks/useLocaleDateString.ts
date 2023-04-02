import { useEffect, useState } from "react"

export const useLocaleDateString = (input: Date): string | null => {
  const [date, setDate] = useState<string | null>(null)

  useEffect(() => {
    setDate(input.toLocaleDateString("nb"))
  }, [input])

  return date
}
