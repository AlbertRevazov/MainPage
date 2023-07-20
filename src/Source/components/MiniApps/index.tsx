import React, { FC } from "react";
import { Password } from "./sections/Password";
import { Contact } from "../Home/sections/Contact";
import { Chuck } from "./sections/Chuck";
import { Converter } from "./sections/Converter";

export const MiniApps: FC = () => {
  return (
    <>
      <Password />
      <Converter />
      {/* <Chuck /> */}
      <Contact />
    </>
  );
};
