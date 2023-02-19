import React from "react"
import Text from "./Text"
import cx from "classnames"
import { fontFamily, fontSize, fontWeight, lineHeight } from "../theme"

type HeadingProps = React.ComponentProps<typeof Text>

const defaultProps = {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.tight,
  fontSize: fontSize.xl,
}

const Heading: React.FC<HeadingProps> = ({
  children,
  cssClass,
  ...rest
}: HeadingProps) => {
  return (
    <Text {...defaultProps} {...rest} cssClass={cx("heading", cssClass)}>
      {children}
    </Text>
  )
}

export default Heading
