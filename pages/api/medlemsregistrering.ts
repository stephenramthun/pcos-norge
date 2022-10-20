import { NextApiRequest, NextApiResponse } from "next"
import { persistMemberRegistration } from "io/prisma/client"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime"

type FormRequestBody = {
  givenName: string
  familyName: string
  email: string
  postalCode: string
  address: string
  city: string
  recaptchaToken: string
}

type RecaptchaResponseBody = {
  success: boolean
  challenge_ts: string
  hostname: string
}

function validateGivenName(body: NextApiRequest["body"]): boolean {
  return typeof body.givenName === "string" && body.givenName.length > 0
}

function validateFamilyName(body: NextApiRequest["body"]): boolean {
  return typeof body.familyName === "string" && body.familyName.length > 0
}

function validateEmail(body: NextApiRequest["body"]): boolean {
  const emailMatcher =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return typeof body.email === "string" && emailMatcher.test(body.email)
}

function validateAddress(body: NextApiRequest["body"]): boolean {
  return typeof body.address === "string" && body.address.length > 0
}

function validatePostalCode(body: NextApiRequest["body"]): boolean {
  return typeof body.postalCode === "string" && body.postalCode.length === 4
}

function validateCity(body: NextApiRequest["body"]): boolean {
  return typeof body.city === "string" && body.city.length > 0
}

function validateRequestBody(body: NextApiRequest["body"]): boolean {
  return (
    validateGivenName(body) &&
    validateFamilyName(body) &&
    validateEmail(body) &&
    validateAddress(body) &&
    validatePostalCode(body) &&
    validateCity(body)
  )
}

function fetchRecaptchaScore(
  clientToken: string,
): Promise<RecaptchaResponseBody> {
  return fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.GOOGLE_RECAPTCHA_SERVER_KEY}&response=${clientToken}`,
  }).then((response) => response.json())
}

function isValid(body: RecaptchaResponseBody): boolean {
  return body.success
}

export default async function medlemsregistrering(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse | void> {
  if (!validateRequestBody(req.body)) {
    return res.status(400).end()
  }

  const body = req.body as FormRequestBody

  const response: RecaptchaResponseBody = await fetchRecaptchaScore(
    body.recaptchaToken,
  )

  if (!isValid(response)) {
    return res
      .status(400)
      .json({ message: "Recaptcha not valid. User is most likely a bot 🤖." })
  }

  try {
    await persistMemberRegistration(body)
    return res.redirect(303, "/").end()
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError
    switch (prismaError.code) {
      case "P2002": {
        return res.status(409).end()
      }
      default: {
        console.error(error)
        return res.status(400).json(error)
      }
    }
  }
}
