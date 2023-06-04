import { FC } from "react";
import { Contacts } from "./sections/Contacts";
import { Form } from "./sections/Form";
import "./styles.css";

export const Contact: FC = () => {
  return (
    <div id="contact" className="contact__wrapper">
      <div className="contact__container">
        <Contacts />
        <Form />
      </div>
    </div>
  );
};
