import { UserInfoForm } from "./UserInfoForm"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect } from "@jest/globals"
import { act } from "react-dom/test-utils"
import { mockUpdateInfoError } from "mocks/server"
import { userInfo } from "mocks/data"

describe("UserInfoForm", () => {
  const testData = userInfo()

  const onClose = jest.fn()
  const onSubmit = jest.fn()

  afterEach(() => {
    jest.resetAllMocks()
  })

  it("successfully submits form data", async () => {
    render(
      <UserInfoForm {...testData} onSubmit={onSubmit} closeForm={onClose} />,
    )

    await act(() =>
      userEvent.pointer({
        target: screen.getByText("Lagre kontaktinfo", { exact: false }),
        keys: "[MouseLeft]",
      }),
    )

    await waitFor(() => {
      expect(screen.queryAllByRole("alert")).toHaveLength(0)
      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  it("show error message when submitting fails", async () => {
    mockUpdateInfoError()

    render(
      <UserInfoForm {...testData} onSubmit={onSubmit} closeForm={onClose} />,
    )

    await act(() =>
      userEvent.pointer({
        target: screen.getByText("Lagre kontaktinfo", { exact: false }),
        keys: "[MouseLeft]",
      }),
    )

    await waitFor(() => {
      expect(screen.queryAllByRole("alert")).toHaveLength(1)
      expect(onSubmit).toHaveBeenCalledTimes(0)
      expect(onClose).toHaveBeenCalledTimes(0)
    })
  })

  it("shows error messages when entering invalid data", async () => {
    const invalidUserInfo = {
      givenName: "",
      familyName: "",
      streetAddress: "",
      postalCode: "1234a",
      region: "",
      email: "test.test.no",
      phoneNumber: "1234567",
    } as unknown as UserInfo

    render(
      <UserInfoForm
        {...invalidUserInfo}
        onSubmit={onSubmit}
        closeForm={onClose}
      />,
    )

    await act(() =>
      userEvent.pointer({
        target: screen.getByText("Lagre kontaktinfo", { exact: false }),
        keys: "[MouseLeft]",
      }),
    )

    await waitFor(() => {
      expect(screen.queryAllByRole("alert")).toHaveLength(7)
      expect(onSubmit).toHaveBeenCalledTimes(0)
      expect(onClose).toHaveBeenCalledTimes(0)
    })
  })

  it("closes itself", async () => {
    render(
      <UserInfoForm {...testData} onSubmit={onSubmit} closeForm={onClose} />,
    )

    await act(() =>
      userEvent.pointer({
        target: screen.getByText("Avbryt", { exact: false }),
        keys: "[MouseLeft]",
      }),
    )

    await waitFor(() => {
      expect(screen.queryAllByRole("alert")).toHaveLength(0)
      expect(onSubmit).toHaveBeenCalledTimes(0)
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
