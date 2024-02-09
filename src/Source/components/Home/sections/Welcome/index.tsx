import React, { FC } from "react";
import { Links } from "../../../../common/Links";
import { Icon } from "../../../../common/Icon";
import "./styles.css";

export const Welcome: FC = () => {
  return (
    <div className="welcome container">
      <div className="wrapper__container">
        <div className="hello">
          <h2 className="header__title">
            <span className="header__hello"> Hello,</span> I’m
          </h2>
          <div className="hero__name">
            <div className="hero__bio">
              <h1>ALBERT REVAZOV</h1>
              <span className={"hero__bio line"} />
            </div>
          </div>
          <h3 className="header__subtitle"> Frontend Developer</h3>,
        </div>
        <div className={"hero__links-wrapper"}>
          <Icon className={"hero__image"} src="/img/abe.png" alt="pic" />
        </div>
        <Links className="social__media" />
      </div>
      <img className={"hero__bg"} src="/img/welcome_bg.png" alt="welcome_bg" />
    </div>
  );
};
