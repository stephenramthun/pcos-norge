import React from "react"
import Text from "./Text"
import { fontFamily, fontSize, fontWeight, lineHeight } from "../theme"

type HeadingProps = React.ComponentProps<typeof Text>

const defaultProps = {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.tight,
  fontSize: fontSize.xl,
}

const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
  return (
    <Text {...defaultProps} {...props}>
      {props.children}
    </Text>
  )
}

export default Heading
