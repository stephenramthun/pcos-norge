import { NextApiRequest, NextApiResponse } from "next"

export default function preview(
  req: NextApiRequest,
  res: NextApiResponse,
): NextApiResponse | void {
  if (!req?.query?.secret) {
    return res.status(401).json({ message: "No secret token" })
  }

  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid secret token" })
  }

  if (!req.query.slug) {
    return res.status(401).json({ message: "No slug" })
  }

  res.setPreviewData({})

  res.writeHead(307, { Location: `/aktuelt/${req?.query?.slug}` ?? `/` })

  return res.end()
}
