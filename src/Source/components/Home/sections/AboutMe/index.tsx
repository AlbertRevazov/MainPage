import React from "react";
import { AboutBlock } from "./sections/About";
import { Trusted } from "./sections/Trusted";
import { LetsWork } from "./sections/LetsWork";

export const AboutMe = () => {
  return (
    <>
      <AboutBlock />
      <Trusted />
      <LetsWork />
    </>
  );
};
