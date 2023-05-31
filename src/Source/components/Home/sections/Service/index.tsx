import React, { FC } from "react";
import "./styles.css";
import { Card } from "../../../Card";

export const Service: FC = () => {
  return (
    <div id="service" className="service__container">
      <div className="service__wrapper">
        <div className="service__title">
          <h3 className={"service__count"}>02</h3>
          <h4>My Service</h4>
        </div>
        <div className="service__cards">
          <Card
            src="/img/icons/github.png"
            alt=""
            description={`Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint.
             Vuis enim velit ullamco`}
            title="UI/UX Design"
            width={28}
            height={28}
          />
          <Card
            src="/img/icons/github.png"
            alt=""
            description={`Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint.
             Vuis enim velit ullamco`}
            title="Product Design"
            width={28}
            height={28}
          />
          <Card
            src="/img/icons/github.png"
            alt=""
            description={`Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint.
             Vuis enim velit ullamco`}
            title="Brand Identity"
            width={28}
            height={28}
          />
          <Card
            src="/img/icons/github.png"
            alt=""
            description={`Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint.
             Vuis enim velit ullamco`}
            title="Website Design"
            width={28}
            height={28}
          />
        </div>
      </div>
    </div>
  );
};
