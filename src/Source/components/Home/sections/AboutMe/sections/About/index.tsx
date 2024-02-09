import { FC } from "react";
import "./styles.css";
import { AboutHero } from "./AboutHero";

export const AboutBlock: FC = () => {
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <div className="about__wrapper__blocks">
          <div className="about__years__block">
            <img
              src="/img/ave.jpg"
              alt=""
              className="years__image image image-zoom"
            />
            <div className="title__years">
              and more tools have been studied<h3 className={"count"}>10</h3>
            </div>
          </div>
          <div className="about__stack__block">
            <div className="title__stack">
              <h3 className={"count"}>+2</h3>Year of experience
            </div>
            <img src="/img/rew.jpg" alt="" className="image" />
          </div>
        </div>
        <AboutHero />
      </div>
    </div>
  );
};
