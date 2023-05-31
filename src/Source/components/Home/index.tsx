import React, { FC } from "react";
import { HeaderBlock } from "./sections/Welcome";
import { AboutMe } from "./sections/AboutMe";
import { Service } from "./sections/Service";
import { WorkExperience } from "./sections/WorkExperience";

export const HomePage: FC = () => {
  return (
    <>
      <HeaderBlock />
      <AboutMe />
      <Service />
      <WorkExperience />
    </>
  );
};
