import { useCallback, useEffect, useRef } from "react"

type UsePollingOptions = {
  delay?: number
  interval?: number
  active?: boolean
}

const defaultUsePollingOptions: UsePollingOptions = {
  delay: 3000,
  interval: 2000,
  active: true,
}

export const useAsyncPolling = (
  fn: () => Promise<void>,
  { delay, interval, active }: UsePollingOptions = defaultUsePollingOptions,
): void => {
  const timeout = useRef<number>()

  const callback = useCallback(async () => {
    await fn()
    timeout.current = window.setTimeout(callback, interval)
  }, [fn, interval])

  useEffect(() => {
    if (active) {
      const initial = window.setTimeout(callback, delay)
      return () => {
        window.clearTimeout(initial)
        window.clearTimeout(timeout.current)
      }
    }
  }, [timeout, callback, delay, active])
}
