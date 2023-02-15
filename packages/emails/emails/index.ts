import nodemailer from "nodemailer"
import { buildSendMail } from "mailing-core"

export const transport = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDGRID_API_USERNAME,
    pass: process.env.SENDGRID_API_KEY,
  },
})

export const sendMail = buildSendMail({
  transport: transport,
  defaultFrom: "hei@pcosnorge.no",
  configPath: "./mailing.config.json",
})

export default sendMail
