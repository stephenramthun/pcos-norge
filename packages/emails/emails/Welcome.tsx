import React from "react"
import { MjmlColumn, MjmlSection, MjmlWrapper } from "mjml-react"
import BaseLayout from "./components/BaseLayout"
import Footer from "./components/Footer"
import Heading from "./components/Heading"
import Header from "./components/Header"
import Text from "./components/Text"
import Link from "./components/Link"
import { fontSize, fontWeight, screens, spacing } from "./theme"

const welcomeStyle = `
  .p > * {
    font-size: ${fontSize.base}px !important;
  }

  @media (min-width:${screens.xs}) {
    .p > * {
      font-size: ${fontSize.md}px !important;
    }
  }
`

type WelcomeProps = {
  name?: string
}

export const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return (
    <BaseLayout width={600} style={welcomeStyle}>
      <Header />
      <MjmlWrapper>
        <MjmlSection paddingBottom={spacing.s10} cssClass="gutter">
          <MjmlColumn>
            <Heading fontWeight={fontWeight.bold} fontSize={fontSize.xxl}>
              {name ? `Hei, ${name}! 👋` : "Hei, og velkommen! 👋"}
            </Heading>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <Text cssClass="p" paddingBottom={spacing.s8}>
              Tusen takk for tilliten!
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Ditt bidrag hjelper oss i vårt arbeid for økt oppmerksomhet rundt
              diagnosen og et bedre helsetilbud for mennesker med PCOS i Norge.
            </Text>

            <Text cssClass="p" paddingBottom={spacing.s8}>
              Du kan når som helst administrere ditt medlemskap på{" "}
              <Link href="https://www.pcosnorge.no/min-side">
                www.pcosnorge.no/min-side
              </Link>
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  )
}
;(Welcome as unknown as { subject: string }).subject =
  "Velkommen til PCOS Norge"

export default Welcome
