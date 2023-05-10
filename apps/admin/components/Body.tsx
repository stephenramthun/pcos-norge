import classNames from "classnames"
import { Rubik } from "next/font/google"
import React from "react"

import styles from "./Body.module.css"

const rubik = Rubik({ subsets: ["latin"] })

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Body: React.FC<BodyProps> = ({
  className,
  children,
  ...paragraphProps
}) => {
  return (
    <p
      className={classNames(styles.text, rubik.className, className)}
      {...paragraphProps}
    >
      {children}
    </p>
  )
}
