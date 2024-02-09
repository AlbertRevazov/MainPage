import { FC, useEffect } from "react";
import { Welcome } from "./sections/Welcome";
import { AboutMe } from "./sections/AboutMe";
import { Service } from "./sections/Service";
import { WorkExperience } from "./sections/WorkExperience";
import { Contact } from "../../common/Contact";
import { Footer } from "../../common/Footer";

export const HomePage: FC = () => {
  const theme = document.body.dataset.theme;
  useEffect(() => {}, [theme]);

  return (
    <>
      <Welcome />
      <AboutMe />
      <Service />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  );
};
