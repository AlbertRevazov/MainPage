import { FC } from "react";
import { Password } from "./sections/Password";
import { Converter } from "./sections/Converter";
import { Contact } from "../Contact";
import { Footer } from "../Footer";

export const MiniApps: FC = () => {
  return (
    <>
      <Password />
      <Converter />
      <Contact />
      <Footer />
    </>
  );
};
