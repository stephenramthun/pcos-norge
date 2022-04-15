import React from "react"

import styles from "./SlideMenu.module.css"
import * as classNames from "classnames"
import { ArrowLink } from "./ArrowLink"

interface SlideMenu
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  expanded: boolean
}

export const SlideMenu: React.VFC<SlideMenu> = ({
  className,
  expanded,
  ...navProps
}) => (
  <nav
    className={classNames(
      styles.SlideMenu,
      expanded && styles.expanded,
      className,
    )}
    {...navProps}
  >
    <ul>
      <li>
        <ArrowLink className={styles.Link} href="/">
          Om PCOS
        </ArrowLink>
      </li>
      <li>
        <ArrowLink className={styles.Link} href="/">
          Om oss
        </ArrowLink>
      </li>
      <li>
        <ArrowLink className={styles.Link} href="/">
          Aktuelt
        </ArrowLink>
      </li>
      <li>
        <ArrowLink className={styles.Link} href="/">
          Bli medlem
        </ArrowLink>
      </li>
    </ul>
  </nav>
)
