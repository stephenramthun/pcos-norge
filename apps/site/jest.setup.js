import "@testing-library/jest-dom/extend-expect"
import { TextDecoder, TextEncoder } from "util"
import { server } from "./mocks/server"
import { afterAll, afterEach, beforeAll } from "@jest/globals"
import { fetch, Request, Response } from "cross-fetch"

global.fetch = fetch
global.Request = Request
global.Response = Response

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" })
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
