import React, { ReactNode } from "react";
import Heading from "./Heading";
import { fontSize, fontWeight, spacing } from "../theme";

type SubHeaderProps = {
  children: ReactNode;
};

export const SubHeader: React.FC<SubHeaderProps> = ({ children }) => (
  <Heading
    fontSize={fontSize.lg}
    fontWeight={fontWeight.bold}
    paddingBottom={spacing.s4}
  >
    {children}
  </Heading>
);
