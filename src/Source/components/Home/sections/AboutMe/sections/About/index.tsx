import { FC } from "react";
import "./styles.css";

export const AboutBlock: FC = () => {
  return (
    <div className="about__container">
      <div id="about" className="about__wrapper">
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
              <h3 className={"count"}>2</h3>Year of experience
            </div>
            <img src="/img/rew.jpg" alt="" className="image " />
          </div>
        </div>

        <div className="about__hero">
          <h3 className={"count"}>01</h3>

          <div className="about__hero__text">
            <div className="about__hero__title">about me</div>
            <span>
              I am engaged in web development. I love and know how to work in a
              team, I am able to break a complex task into several simple
              subtasks, I am always looking for optimal solutions, alternative
              ways to improve the quality of the product.
            </span>
            <span>The plans are to master React Native.</span>
            <span>
              My position: "Respect and mutual assistance are the basis of
              teamwork"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
