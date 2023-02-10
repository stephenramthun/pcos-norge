import React from "react"
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlStyle,
} from "mjml-react"
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  screens,
  spacing,
  themeDefaults,
} from "../theme"

type BaseLayoutProps = {
  width?: number
  style?: string
  children: React.ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ width, children, style }) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlFont
          name="ibm-plex-sans"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap"
        />
        <MjmlAttributes>
          <MjmlAll {...themeDefaults} />
        </MjmlAttributes>
        <MjmlStyle>{`
          body {
            -webkit-font-smoothing: antialiased;
            min-width: 320px;
            background-color: ${colors.teal100};
          }
          a {
            color: inherit
          }
          .gutter {
            padding-left: ${spacing.s7}px;
            padding-right: ${spacing.s7}px;
          }
          .code {
            font-family: ${fontFamily.mono};
            color: ${colors.green200};
            background-color: ${colors.zinc800};
            font-size: ${fontSize.sm}px;
            border-radius: ${borderRadius.sm}px;
            padding: ${spacing.s1}px ${spacing.s3}px;
          }
          .no-wrap {
            white-space: nowrap;
          }
          .hidden {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .lg-hidden {
            display: none;
            max-width: 0px;
            max-height: 0px;
            overflow: hidden;
            mso-hide: all;
          }
          .logo-light {
            display: none;
          }
          @media (prefers-color-scheme: dark) {
            body {
              background-color: ${colors.teal800} !important;
            }
            body * {
              color: ${colors.teal100} !important;
            }
            .logo-dark {
              opacity: 0;
            }
            .logo-light {
              display: unset;
            }
          }
          /* Large screens */
          @media (min-width:${screens.xs}) {
            .gutter {
              padding-left: ${spacing.s9}px;
              padding-right: ${spacing.s9}px;
            }
            .sm-hidden {
              display: none;
              max-width: 0px;
              max-height: 0px;
              overflow: hidden;
              mso-hide: all;
            }
            .lg-hidden {
              display: block !important;
              max-width: none !important;
              max-height: none !important;
              overflow: visible !important;
              mso-hide: none !important;
            }
          }

          /* Email specific Styles */
          ${style}
      `}</MjmlStyle>
      </MjmlHead>

      <MjmlBody width={width}>{children}</MjmlBody>
    </Mjml>
  )
}

export default BaseLayout
