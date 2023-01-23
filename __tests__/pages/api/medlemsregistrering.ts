// import fetchMock from "jest-fetch-mock"
// import { createMocks } from "node-mocks-http"
// import { clearMembers } from "__mocks__/io/prisma/client"
//
// const requestBody = (
//   overrides?: Partial<FormRequestBody>,
// ): FormRequestBody => ({
//   givenName: "John",
//   familyName: "Doe",
//   email: "john@doe.com",
//   postalCode: "1234",
//   address: "Some address",
//   city: "Some city",
//   recaptchaToken: "this-is-a-token",
//   ...overrides,
// })
//
// describe("medlemsregistrering", () => {
//   afterEach(() => {
//     fetchMock.mockClear()
//     clearMembers()
//   })
//
//   it("responds with 303 on success", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody(),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(303)
//   })
//
//   it("responds with 409 when a user already exists", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody(),
//     })
//
//     await medlemsregistrering(req, res)
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(409)
//   })
//
//   it("responds with 400 when recaptcha-token is not valid", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": false }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody(),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(400)
//     expect(res._getJSONData()).toStrictEqual({
//       message: "Recaptcha not valid. User is most likely a bot 🤖.",
//     })
//   })
//
//   it("responds with 400 when missing form field: givenName", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody({ givenName: undefined }),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(400)
//   })
//
//   it("responds with 400 when missing form field: familyName", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody({ familyName: undefined }),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(400)
//   })
//
//   it("responds with 400 when missing form field: email", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody({ email: undefined }),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(400)
//   })
//
//   it("responds with 400 when missing form field: postalCode", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody({ postalCode: undefined }),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(400)
//   })
//
//   it("responds with 400 when missing form field: address", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody({ address: undefined }),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(400)
//   })
//
//   it("responds with 400 when missing form field: city", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody({ city: undefined }),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(400)
//   })
//
//   it("responds with 400 when missing form field: recaptchaToken", async () => {
//     fetchMock.mockResponse(() =>
//       Promise.resolve({ body: `{ "success": true }` }),
//     )
//
//     const { req, res } = createMocks({
//       method: "POST",
//       body: requestBody({ recaptchaToken: undefined }),
//     })
//
//     await medlemsregistrering(req, res)
//
//     expect(res._getStatusCode()).toBe(400)
//   })
// })
