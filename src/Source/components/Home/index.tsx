import React, { FC } from "react";
import { HeaderBlock } from "./sections/header";
import { AboutMe } from "./sections/AboutMe";
import { Service } from "./sections/Service";

export const HomePage: FC = () => {
  return (
    <>
      <HeaderBlock />
      <AboutMe />
      <Service />
    </>
  );
};
