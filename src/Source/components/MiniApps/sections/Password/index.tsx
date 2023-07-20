import React, { FC, useRef } from "react";
import { usePasswordGenerateHook } from "./hooks";
import { Inputs } from "./sections/Inputs";
import "./styles.css";
import { CheckboxSelect } from "./sections/CheckboxSelect";
import { Parallax } from "../../../../../Utils/Parallax";

export const Password: FC = () => {
  const {
    handleChangeLength,
    animationhandler,
    copyHandler,
    animated,
    userInput,
    userInputhandler,
    result,
    copied,
    passwordlengthValues,
    boxHandler,
  } = usePasswordGenerateHook();

  const element = useRef(null);
  Parallax(element);
  return (
    <>
      <div className="password__root">
        <div className="mouse-parallax-bg" ref={element} />
      </div>
      <div className="password__container">
        <h2 className="password__title">
          <span> 01</span> Password Generate
        </h2>

        <div className="pass__box">
          <h4 className="description">
            <span>Generates</span>
            passwords with the ability to add characters or words
          </h4>

          <Inputs
            copyHandler={copyHandler}
            userInput={userInput}
            userInputhandler={userInputhandler}
            result={result}
            copied={copied}
          />
          <CheckboxSelect
            handleChangeLength={handleChangeLength}
            passwordlengthValues={passwordlengthValues}
            boxHandler={boxHandler}
          />

          <div className="button__wrapper">
            <button
              type="button"
              disabled={animated ? true : false}
              className="button button__generate"
              onClick={animationhandler}
            >
              {animated ? "Loading..." : "Generate"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
