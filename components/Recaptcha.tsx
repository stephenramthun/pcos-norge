import React, { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    handleRecaptcha(token: string): void
  }
}

interface RecaptchaProps {
  callback: (token: string) => void
}

export const Recaptcha: React.FC<RecaptchaProps> = ({ callback }) => {
  useEffect(() => {
    window.handleRecaptcha = callback
  }, [callback])

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <div
        suppressHydrationWarning
        className="g-recaptcha"
        data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
        data-callback="handleRecaptcha"
      />
    </>
  )
}
