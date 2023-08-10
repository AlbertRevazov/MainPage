import { FC } from "react";
import { Contacts } from "./sections/Contacts";
import { Form } from "./sections/Form";
import "./styles.css";



export const Contact: FC = () => {
  const isHome = window.location.pathname === "/";
  return (
    <div id="contact" className={isHome ? "home__contact" : "apps__contact"}>
      <div className="contact__container">
        <Contacts />
        <Form />
      </div>
    </div>
  );
};
