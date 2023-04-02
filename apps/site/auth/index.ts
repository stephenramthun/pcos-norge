import { NextApiRequest, NextApiResponse } from "next"

export const validateAuthorization = (
  req: NextApiRequest,
  res: NextApiResponse,
): boolean => {
  if (process.env.NODE_ENV === "development") {
    return true
  }
  try {
    const { authorization } = req.headers
    if (authorization !== `Bearer ${process.env.VIPPS_CLIENT_SECRET}`) {
      res.status(401).json({ success: false })
      res.end()
      return false
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: (err as Error)?.message })
    res.end()
    return false
  }
  return true
}
