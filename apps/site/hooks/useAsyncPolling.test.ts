import { useAsyncPolling } from "hooks/useAsyncPolling"
import { renderHook } from "@testing-library/react"

describe("useAsyncPolling", () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it("calls the function at a regular interval with a set delay when active", async () => {
    const callback = jest.fn() as () => Promise<void>

    const options = {
      delay: 500,
      interval: 1000,
      active: true,
    }

    renderHook(() => useAsyncPolling(callback, options))

    expect(callback).not.toBeCalled()

    jest.advanceTimersByTime(options.delay)
    await Promise.resolve()
    expect(callback).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(options.interval)
    await Promise.resolve()
    jest.advanceTimersByTime(options.interval)
    await Promise.resolve()
    expect(callback).toHaveBeenCalledTimes(3)
  })
})
