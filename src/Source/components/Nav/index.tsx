import React, { FC } from "react";
import "./styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MenuBurger } from "./MenuBurger";

export const Navbar: FC = () => {
  const isMobile = useMediaQuery("(max-width:767.98px)");
  return (
    <>
      {!isMobile ? (
        <nav id="menu" className="menu__body">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="/" className="menu__link">
                HOME
              </a>
            </li>
            <li className="menu__item">
              <a href="#about" className="menu__link">
                ABOUT
              </a>
            </li>
            <li className="menu__item">
              <a href="#service" className="menu__link">
                SERVICE
              </a>
            </li>
            <li className="menu__item">
              <a href="#experience" className="menu__link">
                Work Experience
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <MenuBurger />
      )}
    </>
  );
};
