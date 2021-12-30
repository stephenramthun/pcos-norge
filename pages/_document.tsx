import Document, { Head, Html, Main, NextScript } from "next/document"

const notoSans = (
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;600;700;900&display=swap"
    rel="stylesheet"
  />
)

class FontsDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {notoSans}
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

export default FontsDocument
