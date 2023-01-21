import { NextApiRequest, NextApiResponse } from "next"

export default async function registrerMedlemskap(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  console.log("body", req.body)
  console.log("cookies", req.cookies)
  console.log("query", req.query)

  res.status(204).end()
}
