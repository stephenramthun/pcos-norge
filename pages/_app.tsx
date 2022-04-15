import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ReactNode } from "react"

const App = ({ Component, pageProps }: AppProps): ReactNode => (
  <Component {...pageProps} />
)

export default App
