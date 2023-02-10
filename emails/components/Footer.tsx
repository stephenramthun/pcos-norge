import React from "react"
import { MjmlColumn, MjmlSection, MjmlText, MjmlWrapper } from "mjml-react"
import Link from "./Link"
import { colors, fontSize, spacing } from "../theme"
import { EMAIL_PREFERENCES_URL } from "mailing-core"

type FooterProps = {
  includeUnsubscribe?: boolean
}

const Footer: React.FC<FooterProps> = ({ includeUnsubscribe = false }) => {
  return (
    <MjmlWrapper backgroundColor={colors.teal700}>
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

      <MjmlSection paddingTop={spacing.s9} cssClass="gutter">
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

      {includeUnsubscribe && (
        <MjmlSection paddingBottom={spacing.s9}>
          <MjmlColumn>
            <MjmlText
              align="center"
              fontSize={fontSize.xs}
              color={colors.slate400}
              paddingTop={12}
            >
              You&rsquo;re receiving this email because you asked for occasional
              updates about Mailing. If you don&rsquo;t want to receive these in
              the future, you can{" "}
              <Link
                color={colors.slate400}
                textDecoration="underline"
                href={EMAIL_PREFERENCES_URL}
              >
                unsubscribe.
              </Link>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      )}
    </MjmlWrapper>
  )
}

export default Footer
