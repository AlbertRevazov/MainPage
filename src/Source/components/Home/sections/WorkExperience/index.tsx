import { FC } from "react";
import { data } from "./ExperienceData";
import { Card } from "../../../Card";
import "./styles.css";

export const WorkExperience: FC = () => {
  return (
    <div className="work__experience">
      <div className="work__experience__container">
        <div className="work__experience__title">
          <h3 className="work__experience__count">03</h3>
          <h4>work experience</h4>
        </div>
        <div className="work__experience__cards">
          {data.map((exp) => (
            <Card
              key={exp.title}
              isWork={true}
              alt=""
              description={exp.description}
              title={exp.title}
              src={exp.src}
              width={exp.width}
              height={exp.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
