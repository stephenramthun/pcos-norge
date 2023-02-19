import React, { useRef } from "react"
import classNames from "classnames"

import styles from "./HorizontalDragContainer.module.css"

type ElementProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onMouseDown" | "onMouseLeave" | "onMouseUp" | "onMouseMove"
>

interface HorizontalDragContainerProps extends ElementProps {}

export const HorizontalDragContainer: React.FC<
  HorizontalDragContainerProps
> = ({ className, ...elementProps }) => {
  const ref = useRef<HTMLDivElement>(null)

  const dragging = useRef<boolean>(false)

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={ref}
      className={classNames(styles.container, className)}
      {...elementProps}
      onMouseDown={(event) => {
        if (event.target === ref.current) {
          dragging.current = true
        }
      }}
      onMouseUp={() => {
        dragging.current = false
      }}
      onMouseLeave={() => {
        dragging.current = false
      }}
      onMouseMove={(event: React.MouseEvent) => {
        if (dragging.current && ref.current) {
          ref.current.scrollTo({
            left: ref.current.scrollLeft - event.movementX,
          })
        }
      }}
    />
  )
}
