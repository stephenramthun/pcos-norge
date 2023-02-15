import { NextApiRequest, NextApiResponse } from "next"
import { sendMail, Welcome } from "packages/emails"

export default async function send(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse> {
  await sendMail({
    from: "hei@pcosnorge.no",
    to: "stephenramthun@gmail.com",
    dangerouslyForceDeliver: true,
    component: <Welcome name="Stephen" />,
  })

  res.send({ message: "OK", status: 200 })
  return res.end()
}
