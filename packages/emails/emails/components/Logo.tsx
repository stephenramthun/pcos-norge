import React from "react";

const getSourceForLogoVariant = (variant: "light" | "dark"): string =>
  `https://raw.githubusercontent.com/stephenramthun/pcos-norge/main/apps/site/public/${
    variant === "light" ? "logo" : "logo-dark"
  }.svg`;

interface LogoProps {
  variant: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({ variant }) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height={20}
        width={136}
        src={getSourceForLogoVariant(variant)}
        alt=""
        style={{ position: "absolute" }}
        className={`logo-${variant}`}
      />
    </>
  );
};
