import { useEffect, useRef } from "react"

type UseOnScrollCallback = (current: number, previous: number) => void

type UseOnScrollOptions = {
  callback: UseOnScrollCallback
  delay?: number
}

const getScrollY = (): number => {
  if (typeof window !== "undefined") {
    return window.scrollY
  } else {
    return 0
  }
}

export const useOnScroll = ({
  callback,
  delay = 200,
}: UseOnScrollOptions): void => {
  const lastVerticalScrollPosition = useRef(getScrollY())
  const ticking = useRef(false)

  useEffect(() => {
    const eventHandler = (): void => {
      lastVerticalScrollPosition.current = getScrollY()

      if (!ticking.current) {
        const previousVerticalScrollPosition = getScrollY()
        ticking.current = true
        setTimeout(() => {
          callback(
            lastVerticalScrollPosition.current,
            previousVerticalScrollPosition,
          )
          ticking.current = false
        }, delay)
      }
    }

    document.addEventListener("scroll", eventHandler)

    return () => {
      document.removeEventListener("scroll", eventHandler)
    }
  }, [callback, delay])
}
