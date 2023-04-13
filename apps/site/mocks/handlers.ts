import { rest } from "msw"

import { vippsConfig } from "mocks/config"
import { accessTokenResponse, agreement, agreementResponse } from "mocks/data"

export const handlers = [
  rest.post(vippsConfig.accessTokenEndpoint, (req, res, context) => {
    return res(context.status(204), context.json(accessTokenResponse()))
  }),
  rest.post(vippsConfig.recurringPaymentEndpoint, (req, res, context) => {
    return res(context.status(204), context.json(agreementResponse()))
  }),
  rest.get(
    `${vippsConfig.recurringPaymentEndpoint}/:agreementId`,
    (req, res, context) => {
      const id = req.params.agreementId as string
      return res(context.status(204), context.json(agreement({ id })))
    },
  ),
  rest.patch(
    `${vippsConfig.recurringPaymentEndpoint}/:agreementId`,
    (req, res, context) => {
      return res(context.status(204))
    },
  ),
  rest.put(`/api/medlemskap/info`, (req, res, context) => {
    return res(context.status(204))
  }),
]
