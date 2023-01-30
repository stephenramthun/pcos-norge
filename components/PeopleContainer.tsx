import React from "react"

import { PersonCard } from "components/PersonCard"
import { SanityPerson } from "types/sanity"

import styles from "components/PeopleContainer.module.css"

interface PeopleProps {
  people: SanityPerson[]
}

export const PeopleContainer: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div className={styles.container}>
      {people.map((it, i) => (
        <PersonCard
          key={i}
          name={it.name}
          capacity={it.role}
          image={it.picture}
        />
      ))}
    </div>
  )
}
