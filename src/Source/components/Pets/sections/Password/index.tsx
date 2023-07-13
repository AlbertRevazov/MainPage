import React, { FC } from "react";
import "./styles.css";
import { usePasswordGenerateHook } from "./hooks";

export const Password: FC = () => {
  const {
    handleChangeLength,
    animationhandler,
    copyHandler,
    handlePasswordGenerate,
    userInputStatus,
    userInput,
    userInputhandler,
    handleUserInput,
    boxHandler,
    result,
    copied,
    passwordlengthValues,
  } = usePasswordGenerateHook();

  return (
    <div className="password__container">
      <h2 className="title">
        <span> 01</span> Password Generate
      </h2>

      <div className="pass__box">
        <h4 className="description">
          Generates passwords with the ability to add characters or words
        </h4>
        <div className="input__wrapper">
          <input
            type="text"
            readOnly
            defaultValue={result}
            className="passInput"
          />
          
            <input
              type="text"
              name="user"
              value={userInput}
              className="add__input"
              placeholder="Your name or birth date"
              onChange={userInputhandler}
            />
         
            <button type="button" className="button" onClick={handleUserInput}>
              Add Word
            </button>
         
        </div>
        {copied && <span className="copied">Скопировано!</span>}

        <button className="copy" onClick={copyHandler}></button>
        <div className="option">
          <span className="option-name">Длина пароля</span>
          <select onBlur={handleChangeLength}>
            {passwordlengthValues.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div className="option">
          <label className="option-label" htmlFor="symbols">
            Использовать символы
          </label>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={boxHandler}
            id="symbols"
          />
        </div>

        <button type="button" className="button" onClick={animationhandler}>
          Генерировать
        </button>
        {/* <input type="text" className="password" />
        <div className="inputs">
          <input type="text" className="symbols" />
          <select className="symbols"></select>
        </div>
        <div className="button__group">
          <button type="button" className="add">
            Add Word
          </button>
          <button type="button" className="generate">
            Generate
          </button>
        </div> */}
      </div>
    </div>
  );
};
