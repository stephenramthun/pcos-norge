import { NextApiRequest, NextApiResponse } from "next"

export default async function oppdater(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  return res.status(200).end()
}
