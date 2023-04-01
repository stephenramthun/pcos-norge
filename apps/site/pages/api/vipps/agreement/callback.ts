import { NextApiRequest, NextApiResponse } from "next"

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  return res
}
