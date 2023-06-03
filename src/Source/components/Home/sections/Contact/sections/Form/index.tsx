import React, { FC } from "react";
import "./styles.css";
export const Form: FC = () => {
  return (
    <div className="contact__email">
      <div className="contact__email__wrapper">
        <div className="contact__email__title">
          I’m always open to discussing <h3> product design work </h3> or
          partnership
        </div>
        <div className="contact__inputs__bio">
          <div className="input__item">
            <h3>Your name*</h3>
            <input
              id="name"
              type="text"
              className="contact__input"
              placeholder=" Enter your name here"
            />
          </div>
          <div className="input__item">
            <h3>Your email*</h3>
            <input
              id="email"
              type="text"
              className="contact__input"
              placeholder=" Enter your email here"
            />
          </div>
        </div>
        <div className="input__item__message">
          <h3>Message</h3>
          <textarea className="contact__message" />
        </div>
        <button type="submit" className="work__button">
          <h3>send Message</h3>
        </button>
      </div>
    </div>
  );
};
