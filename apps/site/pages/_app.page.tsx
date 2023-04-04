import type { AppProps } from "next/app"
import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

import "./globals.css"

type Props = AppProps & {
  pageProps: AppProps["pageProps"] & { session: Session }
}

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: Props): ReactNode => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
