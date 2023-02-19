import React from "react"
import { MjmlColumn, MjmlGroup, MjmlSection, MjmlWrapper } from "mjml-react"
import Text from "./Text"
import Link from "./Link"
import { Logo } from "./Logo"
import { fontSize, fontWeight } from "../theme"

const Header: React.FC = () => {
  return (
    <MjmlWrapper padding="40px 0 88px">
      <MjmlSection cssClass="gutter">
        <MjmlGroup>
          <MjmlColumn width="42%">
            <Text align="left">
              <Link
                fontSize={fontSize.xl}
                fontWeight={fontWeight.bold}
                href="https://www.pcosnorge.no"
                textDecoration="none"
              >
                <Logo variant="dark" />
                <Logo variant="light" />
              </Link>
            </Text>
          </MjmlColumn>
        </MjmlGroup>
      </MjmlSection>
    </MjmlWrapper>
  )
}

export default Header
