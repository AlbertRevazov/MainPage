import { FC } from "react";
import { Randomizerlabels } from "./Labels";
import "./styles.css";

export const Randomizer: FC = () => {
  return (
    <div className="random">
      <div className="random__container">
        <h2 className="random__title">
          <span>03</span> Randomizer
        </h2>
        <h3 className="random__description">
          Getting a random integer between two values
        </h3>
        <Randomizerlabels />
      </div>
    </div>
  );
};
