import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import classNames from "classnames"
import React, { useRef } from "react"

import styles from "./HorizontalDragContainer.module.css"

const getChildrenOffsets = (parent: Element): number[] =>
  Array.from(parent.children).map((it) => (it as HTMLElement).offsetLeft)

const scrollToNextChild = (parent: Element): void => {
  const offsets = getChildrenOffsets(parent).filter(
    (it) => it > parent.scrollLeft,
  )

  parent.scrollTo({ left: offsets[0], behavior: "smooth" })
}

const scrollToPreviousChild = (parent: Element): void => {
  const offsets = getChildrenOffsets(parent).filter(
    (it) => it < parent.scrollLeft,
  )

  parent.scrollTo({ left: offsets[offsets.length - 1], behavior: "smooth" })
}

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

  const scrollRight = (): void => {
    if (ref.current) {
      scrollToNextChild(ref.current)
    }
  }

  const scrollLeft = (): void => {
    if (ref.current) {
      scrollToPreviousChild(ref.current)
    }
  }

  const setDragging = (shouldBeAbleToDrag: boolean): void => {
    dragging.current = shouldBeAbleToDrag
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={scrollLeft}>
        <ArrowLeft />
      </button>
      <button
        className={classNames(styles.button, styles.right)}
        onClick={scrollRight}
      >
        <ArrowRight />
      </button>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        ref={ref}
        className={classNames(styles.dragContainer, className)}
        {...elementProps}
        onMouseDown={(event) => {
          if (event.target === ref.current) {
            setDragging(true)
          }
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onMouseMove={(event: React.MouseEvent) => {
          if (dragging.current && ref.current) {
            ref.current.scrollTo({
              left: ref.current.scrollLeft - event.movementX,
            })
          }
        }}
      />
    </div>
  )
}
