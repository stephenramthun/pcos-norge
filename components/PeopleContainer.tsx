import React from "react"
import { Person } from "types/schema"
import { PersonCard } from "@components/PersonCard"

import styles from "@components/PeopleContainer.module.css"

interface PeopleProps {
  people: Array<Person>
}

export const PeopleContainer: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div className={styles.PeopleContainer}>
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
