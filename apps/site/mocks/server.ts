import { rest } from "msw"
import { setupServer } from "msw/node"
import { handlers } from "./handlers"
import { AccessTokenResponse } from "io/vipps/accessTokenService"
import { vippsConfig } from "mocks/config"
import { accessTokenResponse, agreement, agreementResponse } from "mocks/data"

export const server = setupServer(...handlers)

export const mockAccessTokenResponse = (
  response: Partial<AccessTokenResponse>,
): void => {
  server.use(
    rest.post(vippsConfig.accessTokenEndpoint, (req, res, context) => {
      return res(
        context.status(204),
        context.json(accessTokenResponse(response)),
      )
    }),
  )
}

export const mockPostAgreement = (
  response: Partial<AgreementResponseBody>,
): void => {
  server.use(
    rest.post(vippsConfig.recurringPaymentEndpoint, (req, res, context) => {
      return res(context.status(204), context.json(agreementResponse(response)))
    }),
  )
}

export const mockGetAgreement = (
  id: string,
  response: Partial<Agreement>,
): void => {
  server.use(
    rest.get(
      `${vippsConfig.recurringPaymentEndpoint}/${id}`,
      (req, res, context) => {
        return res(context.status(204), context.json(agreement(response)))
      },
    ),
  )
}

export const mockStopAgreement = (id: string): void => {
  server.use(
    rest.patch(
      `${vippsConfig.recurringPaymentEndpoint}/${id}`,
      (req, res, context) => {
        return res(context.status(204))
      },
    ),
  )
}

export const mockCaptureCharge = (
  agreementId: string,
  chargeId: string,
): void => {
  server.use(
    rest.post(
      `${vippsConfig.recurringPaymentEndpoint}/${agreementId}/charges/${chargeId}/capture`,
      (req, res, context) => {
        return res(context.status(204))
      },
    ),
  )
}

export const mockCaptureError = (
  agreementId: string,
  chargeId: string,
): void => {
  server.use(
    rest.post(
      `${vippsConfig.recurringPaymentEndpoint}/${agreementId}/charges/${chargeId}/capture`,
      (req, res, context) => {
        return res(context.status(400), context.json({ ok: false }))
      },
    ),
  )
}
