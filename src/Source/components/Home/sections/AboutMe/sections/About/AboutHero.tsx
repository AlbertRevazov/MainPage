import { FC } from "react";

export const AboutHero: FC = () => {
  return (
    <div className="about__hero">
      <h3 className={"count"}>01</h3>

      <div className="about__hero__text">
        <div className="about__hero__title">about me</div>
        <span className="about__span">
          I am engaged in web development. I love and know how to work in a
          team, I am able to break a complex task into several simple subtasks,
          I am always looking for optimal solutions, alternative ways to improve
          the quality of the product.
        </span>
        <span className="about__span">
          The plans are to master React Native.
        </span>
        <span className="about__span">
          My position: "Respect and mutual assistance are the basis of teamwork"
        </span>
      </div>
    </div>
  );
};
