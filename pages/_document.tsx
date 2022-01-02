import Document, { Head, Html, Main, NextScript } from "next/document"

class SiteDocument extends Document {
  render() {
    return (
      <Html lang="no">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
            type="text/javascript"
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SiteDocument
