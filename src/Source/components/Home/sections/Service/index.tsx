import { FC } from "react";
import { Card } from "../../../../common/Card";
import { data } from "./ServiceData";
import "./styles.css";

export const Service: FC = () => {
  return (
    <div className="service__container">
      <div className="service__wrapper">
        <div className="service__title">
          <h3 className={"service__count"}>02</h3>
          <h4>My Service</h4>
        </div>
        <div className="service__cards">
          {data.map((item) => (
            <Card key={item.title} item={item} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
