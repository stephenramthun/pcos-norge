import React, { ReactNode } from "react";
import Heading from "./Heading";
import { fontSize, fontWeight, spacing } from "../theme";

type SubHeaderProps = {
  children: ReactNode;
  paddingBottom?: number;
};

export const SubHeader: React.FC<SubHeaderProps> = ({
  children,
  paddingBottom = spacing.s4,
}) => (
  <Heading
    fontSize={fontSize.lg}
    fontWeight={fontWeight.bold}
    paddingBottom={paddingBottom}
  >
    {children}
  </Heading>
);
