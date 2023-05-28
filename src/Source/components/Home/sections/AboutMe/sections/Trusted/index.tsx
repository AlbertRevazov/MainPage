import React, { FC } from "react";
import "./styles.css";
import { Icon } from "../../../../../Icon";

export const Trusted: FC = () => {
  return (
    <div className={"trusted"}>
      <div className="trusted__container">
        <div className="trust__item">
          <Icon src={"/img/icons/github.png"} alt="git" />
        </div>
        <div className="trust__item">
          <Icon src={"/img/icons/node.png"} alt="node" />
        </div>
        <div className="trust__item">
          <Icon src={"/img/icons/postgres.png"} alt="postgres" />
        </div>
        <div className="trust__item">
          <Icon src={"/img/icons/react.png"} alt="react" />
        </div>
        <div className="trust__item">
          <Icon src={"/img/icons/typescript.png"} alt="typescript" />
        </div>
      </div>
    </div>
  );
};
