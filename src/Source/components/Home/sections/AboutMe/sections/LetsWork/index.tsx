import React, { FC } from "react";
import "./styles.css";
import { Icon } from "../../../../../Icon";

export const LetsWork: FC = () => {
  return (
    <div className="work__container">
      <div className="work__wrapper">
        <p className="work__title">let’s work together on Your Next Project</p>
        <a href="#Email">
          <button className="work__button">hire me now</button>
        </a>
        <div className="work__download">
          <Icon src="/img/icons/download.png" alt="" width={16} height={16} />
          <a href="/files/CV.pdf" download="">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
