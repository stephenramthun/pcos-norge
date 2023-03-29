import { rest } from "msw"
import { setupServer } from "msw/node"
import { handlers } from "./handlers"
import { AccessTokenResponse } from "io/vipps/accessTokenService"
import { vippsConfig } from "mocks/config"
import { accessTokenResponse, agreementResponse } from "mocks/data"

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

export const mockPostAgreementError = (error: ErrorResponse): void => {
  server.use(
    rest.post(vippsConfig.recurringPaymentEndpoint, (req, res, context) => {
      return res(context.status(error.status), context.json(error))
    }),
  )
}

export const mockGetAgreementError = (
  id: string,
  error: ErrorResponse,
): void => {
  server.use(
    rest.get(
      `${vippsConfig.recurringPaymentEndpoint}/${id}`,
      (req, res, context) => {
        return res(context.status(error.status), context.json(error))
      },
    ),
  )
}

export const mockStopAgreementError = (status = 500): void => {
  server.use(
    rest.patch(
      `${vippsConfig.recurringPaymentEndpoint}/:agreementId`,
      (req, res, context) => {
        return res(context.status(status))
      },
    ),
  )
}

export const mockGetCharges = (
  agreementId: string,
  charges: ChargeResponseBody[] = [],
): void => {
  server.use(
    rest.get(
      `${vippsConfig.recurringPaymentEndpoint}/${agreementId}/charges`,
      (req, res, context) => {
        return res(context.status(200), context.json(charges))
      },
    ),
  )
}

export const mockGetChargesError = (
  agreementId: string,
  status = 500,
): void => {
  server.use(
    rest.get(
      `${vippsConfig.recurringPaymentEndpoint}/${agreementId}/charges`,
      (req, res, context) => {
        return res(context.status(status), context.json({ ok: false }))
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
        return res(context.status(204), context.json({ ok: true }))
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
