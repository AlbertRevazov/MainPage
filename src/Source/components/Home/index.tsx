import React, { FC } from "react";
import { HeaderBlock } from "./sections/header";
import { AboutMe } from "./sections/AboutMe";

export const HomePage: FC = () => {
  return (
    <>
      <HeaderBlock />
      <AboutMe />
    </>
  );
};
