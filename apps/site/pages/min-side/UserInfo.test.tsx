import { render, screen, waitFor } from "@testing-library/react"
import { UserInfo } from "./UserInfo"
import { userInfo } from "mocks/data"
import { expect } from "@jest/globals"
import { act } from "react-dom/test-utils"
import userEvent from "@testing-library/user-event"

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
