import Document, { Head, Html, Main, NextScript } from "next/document"

class SiteDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="no">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SiteDocument
