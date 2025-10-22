import React from "react";
import cx from "classnames";
import { MjmlText } from "mjml-react";
import Text from "./Text";

type ParagraphProps = React.ComponentProps<typeof MjmlText>;

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
  return (
    <Text {...props} cssClass={cx("p", props.cssClass)}>
      {children}
    </Text>
  );
};

export default Paragraph;
