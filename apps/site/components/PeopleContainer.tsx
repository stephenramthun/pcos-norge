import React from "react"

import styles from "components/PeopleContainer.module.css"
import { PersonCard } from "components/PersonCard"
import { SanityPerson } from "types/sanity"

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
          email={it.email}
        />
      ))}
    </div>
  )
}
