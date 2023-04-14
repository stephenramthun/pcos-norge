import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

import "./globals.css"

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
export default App
