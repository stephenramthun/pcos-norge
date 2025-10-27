import React from "react";
import cx from "classnames";
import { MjmlText } from "mjml-react";

type TextProps = React.ComponentProps<typeof MjmlText>;

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <MjmlText {...props} cssClass={cx("text", props.cssClass)}>
      {children}
    </MjmlText>
  );
};

export default Text;
