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
import { colors, screens, spacing, themeDefaults } from "../theme"

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
            color: ${colors.gray900};
            background-color: ${colors.teal100};
          }
          .text > *,
          .heading > *,
          a {
            color: ${colors.gray900};
          }
          .gutter {
            padding-left: ${spacing.s7}px;
            padding-right: ${spacing.s7}px;
          }
          .logo-light {
            display: none;
          }
          @media (prefers-color-scheme: dark) {
            body {
              color: ${colors.teal100};
              background-color: ${colors.teal800};
            }
            .text > *,
            .heading > *,
            a {
              color: ${colors.teal100} !important;
            }
            .logo-dark {
              opacity: 0;
            }
            .logo-light {
              display: unset;
            }
          }
          @media (min-width:${screens.xs}) {
            .gutter {
              padding-left: ${spacing.s9}px;
              padding-right: ${spacing.s9}px;
            }
          }
          ${style}
      `}</MjmlStyle>
      </MjmlHead>

      <MjmlBody width={width}>{children}</MjmlBody>
    </Mjml>
  )
}

export default BaseLayout
