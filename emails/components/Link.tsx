import React from "react"
import { HrefProps, MjmlText } from "mjml-react"

type LinkProps = HrefProps & React.ComponentProps<typeof MjmlText>
type StyleProps = Pick<
  LinkProps,
  | "color"
  | "fontFamily"
  | "fontSize"
  | "fontStyle"
  | "fontWeight"
  | "letterSpacing"
  | "height"
  | "textDecoration"
  | "align"
> & {
  textTransform: React.CSSProperties["textTransform"]
}

const getStylePropsFromProps = (props: LinkProps): StyleProps => {
  return {
    color: props.color,
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    fontStyle: props.fontStyle,
    fontWeight: props.fontWeight,
    letterSpacing: props.letterSpacing,
    height: props.height,
    textDecoration: props.textDecoration,
    textTransform: props.textTransform as React.CSSProperties["textTransform"],
    align: props.align,
  }
}

const Link: React.FC<LinkProps> = ({
  children,
  rel = "noopener",
  target = "_blank",
  ...props
}) => {
  return (
    <a
      rel={rel}
      target={target ?? "_blank"}
      style={getStylePropsFromProps(props)}
      className="link"
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
