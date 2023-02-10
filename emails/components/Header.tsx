import React from "react"
import { MjmlColumn, MjmlGroup, MjmlSection, MjmlWrapper } from "mjml-react"
import Text from "./Text"
import Link from "./Link"
import { colors, fontSize, fontWeight } from "../theme"

const Header: React.FC = () => {
  return (
    <MjmlWrapper padding="40px 0 88px">
      <MjmlSection cssClass="gutter">
        <MjmlGroup>
          <MjmlColumn width="42%">
            <Text align="left">
              <Link
                color={colors.white}
                fontSize={fontSize.xl}
                fontWeight={fontWeight.bold}
                href="https://www.pcosnorge.no"
                textDecoration="none"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  height={20}
                  width={136}
                  src="https://raw.githubusercontent.com/stephenramthun/pcos-norge/main/public/logo-dark.png"
                  alt=""
                  style={{
                    position: "absolute",
                    verticalAlign: "text-bottom",
                    paddingRight: 10,
                    paddingBottom: 2,
                  }}
                  className="logo-dark"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  height={20}
                  width={136}
                  src="https://raw.githubusercontent.com/stephenramthun/pcos-norge/main/public/logo-light.png"
                  alt=""
                  style={{
                    position: "absolute",
                    verticalAlign: "text-bottom",
                    paddingRight: 10,
                    paddingBottom: 2,
                  }}
                  className="logo-light"
                />
              </Link>
            </Text>
          </MjmlColumn>
        </MjmlGroup>
      </MjmlSection>
    </MjmlWrapper>
  )
}

export default Header
