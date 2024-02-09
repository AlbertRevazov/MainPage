import { FC } from "react";
import { useFormHook } from "./hooks";
import "./styles.css";

export const Form: FC = () => {
  const { handleChange, handleTextAreaChange, handleSubmit, toSend } =
    useFormHook();

  return (
    <div className="contact__email">
      <div className="contact__email__wrapper">
        <div className="contact__email__title">
          I’m always open to discussing <h3> product develop work </h3> or
          partnership
        </div>
        <form id="Email" onSubmit={handleSubmit}>
          <div className="contact__inputs__bio">
            <div className="input__item">
              <h3>Your name*</h3>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="off"
                value={toSend.name}
                onChange={handleChange}
                className="contact__input"
                placeholder=" Enter your name here"
              />
            </div>
            <div className="input__item">
              <h3>Your email*</h3>
              <input
                id="email"
                type="text"
                autoComplete="off"
                name="email"
                value={toSend.email}
                onChange={handleChange}
                className="contact__input"
                placeholder=" Enter your email here"
              />
            </div>
          </div>
          <div className="input__item__message">
            <h3>Message</h3>
            <textarea
              className="contact__message"
              name="message"
              autoComplete="off"
              value={toSend.message}
              onChange={handleTextAreaChange}
            />
          </div>
          <button type="submit" className="work__button">
            <h3>send Message</h3>
          </button>
        </form>
      </div>
    </div>
  );
};
