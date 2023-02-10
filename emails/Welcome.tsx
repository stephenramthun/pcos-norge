import React from "react"
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react"
import BaseLayout from "./components/BaseLayout"
import Footer from "./components/Footer"
import Heading from "./components/Heading"
import Header from "./components/Header"
import Text from "./components/Text"
import {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  screens,
  spacing,
} from "./theme"
import Link from "emails/components/Link"

const welcomeStyle = `
  .h1 > * {
    font-size: ${fontSize.xxl}px !important;
  }
  .h2 > * {
    font-size: ${fontSize.lg}px !important;
  }
  .p > * {
    font-size: ${fontSize.base}px !important;
  }

  @media (min-width:${screens.xs}) {
    .h1 > * {
      font-size: ${fontSize.xxl}px !important;
    }
    .h2 > * {
      font-size: ${fontSize.lg}px !important;
    }
    .p > * {
      font-size: ${fontSize.md}px !important;
    }
  }
`

type WelcomeProps = {
  includeUnsubscribe?: boolean
  name?: string
}

const Welcome: React.FC<WelcomeProps> = ({ includeUnsubscribe, name }) => {
  return (
    <BaseLayout width={600} style={welcomeStyle}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s10} cssClass="gutter">
          <MjmlColumn>
            <Heading
              maxWidth={420}
              cssClass="h1"
              fontFamily={fontFamily.sans}
              fontWeight={fontWeight.bold}
              fontSize={fontSize.xxl}
            >
              {name ? `Hei, ${name}! 👋` : "Hei, og velkommen! 👋"}
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text
              cssClass="p"
              fontSize={fontSize.md}
              paddingBottom={spacing.s8}
            >
              Tusen takk for tilliten!
            </Text>

            <Text
              cssClass="p"
              fontSize={fontSize.md}
              paddingBottom={spacing.s8}
            >
              Ditt bidrag hjelper oss i vårt arbeid for økt oppmerksomhet rundt
              diagnosen og et bedre helsetilbud for mennesker med PCOS i Norge.
            </Text>

            <Text
              cssClass="p"
              fontSize={fontSize.md}
              paddingBottom={spacing.s8}
            >
              Du kan når som helst administrere ditt medlemskap på{" "}
              <Link
                color={colors.gray900}
                href="https://www.pcosnorge.no/min-side"
              >
                www.pcosnorge.no/min-side
              </Link>
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer includeUnsubscribe={includeUnsubscribe} />
    </BaseLayout>
  )
}

;(Welcome as unknown as { subject: string }).subject =
  "Velkommen til PCOS Norge"

export default Welcome
