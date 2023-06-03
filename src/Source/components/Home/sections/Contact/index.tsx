import React, { FC } from "react";
import "./styles.css";

import { Contacts } from "./sections/Contacts";
import { Form } from "./sections/Form";

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
