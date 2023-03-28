import { rest } from "msw"
import { setupServer } from "msw/node"
import { handlers } from "./handlers"
import { AccessTokenResponse } from "io/vipps/accessTokenService"
import { vippsConfig } from "mocks/config"
import { accessTokenResponse } from "mocks/data"

export const server = setupServer(...handlers)

export const mockAccessTokenResponse = (
  tokenResponse: Partial<AccessTokenResponse>,
): void => {
  server.use(
    rest.post(vippsConfig.accessTokenEndpoint, (req, res, context) => {
      return res(
        context.status(204),
        context.json(accessTokenResponse(tokenResponse)),
      )
    }),
  )
}
