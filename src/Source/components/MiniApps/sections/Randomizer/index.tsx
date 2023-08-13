import { FC } from "react";
import { useRandomizerHook } from "./hooks";
import "./styles.css";

export const Randomizer: FC = () => {
  const {
    min,
    max,
    result,
    handleMinChange,
    handleMaxChange,
    handleGenerate,
    load,
  } = useRandomizerHook();
  console.log(load || max === 0);

  return (
    <div className="random">
      <div className="random__container">
        <h2 className="random__title">
          <span>03</span> Randomizer
        </h2>
        <h3 className="random__description">
          Getting a random integer between two values
        </h3>
        <div className="inputs__random">
          <div className="inputs__wrap">
            <input
              type="text"
              name="min"
              className="textfield min"
              value={min}
              onChange={handleMinChange}
            />
            <h3>Minimal value</h3>
          </div>
          <div className="inputs__wrap">
            <input
              type="text"
              name="max"
              className="textfield max"
              value={max}
              onChange={handleMaxChange}
            />
            <h3>Maximal value</h3>
          </div>
        </div>
        <div className="btn__wrap">
          <button
            type="button"
            className="btn__random"
            onClick={handleGenerate}
            disabled={max === 0 || load}
          >
            {!load ? "Generate" : "Loading..."}
          </button>
        </div>
        <div className="inputs__random">
          <input
            type="text"
            name="result"
            className="result"
            readOnly
            value={result}
          />
        </div>
      </div>
    </div>
  );
};
