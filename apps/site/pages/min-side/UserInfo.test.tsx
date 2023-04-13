import { expect } from "@jest/globals"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

import { userInfo } from "mocks/data"

import { UserInfo } from "./UserInfo"

describe("UserInfo", () => {
  const testData = userInfo()

  it("toggles between displaying and editing", async () => {
    render(<UserInfo {...testData} />)

    expect(screen.queryAllByRole("textbox")).toHaveLength(0)

    await act(() => {
      userEvent.pointer({
        target: screen.getByText("Rediger kontaktinfo", { exact: false }),
        keys: "[MouseLeft]",
      })
    })

    await waitFor(() => {
      expect(screen.queryAllByRole("textbox")).toHaveLength(7)
    })

    await act(() => {
      userEvent.pointer({
        target: screen.getByText("Avbryt", { exact: false }),
        keys: "[MouseLeft]",
      })
    })

    await waitFor(() => {
      expect(screen.queryAllByRole("textbox")).toHaveLength(0)
    })
  })
})
