import { FC } from "react";
import { Password } from "./sections/Password";
import { Converter } from "./sections/Converter";

export const MiniApps: FC = () => {
  return (
    <>
      <Password />
      <Converter />
    </>
  );
};
