import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ReactNode } from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const getRecaptchaKey = (): string => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_KEY

  if (typeof key !== "string") {
    throw Error("Failed to find recaptcha client key")
  }

  return key
}

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={getRecaptchaKey()}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default App
