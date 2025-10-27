import React from "react";
import cx from "classnames";
import { MjmlText } from "mjml-react";
import Text from "./Text";
import { fontWeight } from "../theme";

type BoldProps = React.ComponentProps<typeof MjmlText>;

const Bold: React.FC<BoldProps> = ({ children, ...props }) => {
  return (
    <Text
      {...props}
      cssClass={cx("p", props.cssClass)}
      fontWeight={fontWeight.bold}
    >
      {children}
    </Text>
  );
};

export default Bold;
