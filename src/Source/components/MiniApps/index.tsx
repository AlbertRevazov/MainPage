import { FC } from "react";
import { Password } from "./sections/Password";
import { Converter } from "./sections/Converter";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Randomizer } from "./sections/Randomizer";

export const MiniApps: FC = () => {
  return (
    <>
      <Password />
      <Converter />
      <Randomizer />
      <Contact />
      <Footer />
    </>
  );
};
