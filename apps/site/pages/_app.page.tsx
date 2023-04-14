import type { AppProps } from "next/app"
import { ReactNode } from "react"

import "./globals.css"

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />
}

export default App
