import React from "react"
import { MjmlColumn, MjmlSection, MjmlText, MjmlWrapper } from "mjml-react"
import Link from "./Link"
import Text from "./Text"
import { colors, fontSize, spacing } from "../theme"

const Footer: React.FC = () => {
  return (
    <>
      <MjmlWrapper backgroundColor={colors.teal700} fullWidth>
        <MjmlSection
          paddingTop={spacing.s9}
          paddingBottom={spacing.s3}
          cssClass="gutter"
        >
          <MjmlColumn>
            <MjmlText fontSize={fontSize.sm} color={colors.teal100}>
              PCOS Norge
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection paddingBottom={spacing.s3} cssClass="gutter">
          <MjmlColumn width="15%">
            <MjmlText fontSize={fontSize.sm} color={colors.teal100}>
              Epost
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="85%">
            <MjmlText fontSize={fontSize.sm} color={colors.teal100}>
              <Link href="mailto:post@pcosnorge.no" color={colors.teal100}>
                post@pcosnorge.no
              </Link>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection paddingBottom={spacing.s3} cssClass="gutter">
          <MjmlColumn width="15%">
            <MjmlText fontSize={fontSize.sm} color={colors.teal100}>
              Org.nr.
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="85%">
            <MjmlText fontSize={fontSize.sm} color={colors.teal100}>
              927 818 906
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection paddingTop={spacing.s8} cssClass="gutter">
          <MjmlColumn>
            <MjmlText>
              <Link
                fontSize={fontSize.sm}
                color={colors.teal100}
                href="https://www.pcosnorge.no/personvernerklæring"
              >
                Personvernerklæring
              </Link>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection
          paddingTop={spacing.s3}
          paddingBottom={spacing.s9}
          cssClass="gutter"
        >
          <MjmlColumn>
            <MjmlText fontSize={fontSize.sm} color={colors.teal100}>
              <Link
                color={colors.teal100}
                href="https://www.pcosnorge.no/min-side"
              >
                Min side
              </Link>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <MjmlWrapper>
        <MjmlSection
          paddingTop={spacing.s9}
          paddingBottom={spacing.s9}
          cssClass="gutter"
        >
          <MjmlColumn>
            <Text fontSize={fontSize.xs}>
              Ønsker du ikke å motta eposter fra oss? Administrer dine
              epost-innstillinger{" "}
              <Link href="https://www.pcosnorge.no/min-side">her</Link>
            </Text>
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
    </>
  )
}

export default Footer
