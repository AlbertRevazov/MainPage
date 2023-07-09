import { FC } from "react";
import { MenuBurger } from "./MenuBurger";
import { Switcher } from "../Switcher/Switcher";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";

export const Navbar: FC = () => {
  const isMobile = useMediaQuery("(max-width:767.98px)");
  return (
    <>
      {!isMobile ? (
        <div style={{ display: "flex", alignItems: "center" }}>
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
          <Switcher />
        </div>
      ) : (
        <MenuBurger />
      )}
    </>
  );
};
