import { rest } from "msw"
import { vippsConfig } from "mocks/config"
import { accessTokenResponse, agreementResponse } from "mocks/data"

export const handlers = [
  rest.post(vippsConfig.accessTokenEndpoint, (req, res, context) => {
    return res(context.status(204), context.json(accessTokenResponse()))
  }),
  rest.post(vippsConfig.recurringPaymentEndpoint, (req, res, context) => {
    return res(context.status(204), context.json(agreementResponse()))
  }),
]
