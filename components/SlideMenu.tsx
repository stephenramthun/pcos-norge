import React from "react"

import styles from "./SlideMenu.module.css"
import * as classNames from "classnames"
import { Link } from "./Link"

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
    className={classNames(styles.SlideMenu, expanded && styles.expanded)}
    {...navProps}
  >
    <ul>
      <li>
        <Link className={styles.Link} href="/">
          Om PCOS
        </Link>
      </li>
      <li>
        <Link className={styles.Link} href="/">
          Om oss
        </Link>
      </li>
      <li>
        <Link className={styles.Link} href="/">
          Aktuelt
        </Link>
      </li>
      <li>
        <Link className={styles.Link} href="/">
          Bli medlem
        </Link>
      </li>
    </ul>
  </nav>
)
