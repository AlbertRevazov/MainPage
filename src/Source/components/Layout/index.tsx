import React, { FC, ReactNode } from "react";
import "./styles.css";
import { Navbar } from "../Nav";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <header className="header__nav">
        <div className="header__container">
          <a href="#" className="header__logo">
            <span className="first__letter">R</span>EVAZ
          </a>
          <div className="header__menu menu">
            <Navbar />
          </div>
          <div className="header__button">
            <a href="#" className="button button_blue">
              CONTACT
            </a>
            <a href="#menu" className="icon-menu">
              <span></span>
            </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="footer"></footer>
    </div>
  );
};
