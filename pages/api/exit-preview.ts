import { NextApiRequest, NextApiResponse } from "next"

export default function exit(req: NextApiRequest, res: NextApiResponse): void {
  res.clearPreviewData()

  res.writeHead(307, { Location: `/` })
}
