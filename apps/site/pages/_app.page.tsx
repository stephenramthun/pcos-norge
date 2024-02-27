import type { AppProps } from "next/app"
import { Open_Sans } from "next/font/google"
import { ReactNode } from "react"

import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"] })

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
