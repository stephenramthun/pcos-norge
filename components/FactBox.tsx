import React, { VFC } from "react"
import classNames from "classnames"

import { Body } from "./Body"

import styles from "./FactBox.module.css"

type Fact = {
  question: string
  answer: string
}

interface FactBoxProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "children"> {
  facts: Array<Fact>
}

export const FactBox: VFC<FactBoxProps> = ({
  facts,
  className,
  ...ulProps
}) => {
  return (
    <ul className={classNames(styles.list, className)} {...ulProps}>
      {facts.map((fact, i) => (
        <li key={i}>
          <Body>{fact.question}:</Body>
          <Body>{fact.answer}</Body>
        </li>
      ))}
    </ul>
  )
}
