import React from "react";
import "./styles.css";

export const FirstPage = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <a href="#" className="header__logo">
            <img src="img/logo.svg" alt="logo image" />
          </a>
          <div className="header__menu menu">
            <nav id="menu" className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    HOME
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    FEATURES
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    SUPPORT
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__button">
            <a href="#" className="button button_blue">
              DOWNLOAD
            </a>
            <a href="#menu" className="icon-menu">
              <span></span>
            </a>
          </div>
        </div>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
};
