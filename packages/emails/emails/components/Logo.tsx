import React from "react";

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
        src={`https://raw.githubusercontent.com/stephenramthun/pcos-norge/main/apps/site/public/logo-${variant}.png`}
        alt=""
        style={{ position: "absolute" }}
        className={`logo-${variant}`}
      />
    </>
  );
};
