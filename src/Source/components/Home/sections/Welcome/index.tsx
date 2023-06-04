import React from "react";
import "./styles.css";
import { Links } from "../../../Links";

export const Welcome = () => {
  return (
    <div className="container">
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
          <Links className="social__media" />
          <img className={"hero__image"} src="/img/abe.png" alt="pic" />
        </div>
      </div>
      <div className={"hero__bg"} />
    </div>
  );
};
