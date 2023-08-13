import { FC } from "react";
import { MenuBurger } from "./MenuBurger";
import { Switcher } from "../Switcher/Switcher";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";
<div className="translate"></div>;

export const Navbar: FC = () => {
  const isMobile = useMediaQuery("(min-width:999.98px)");
  const isHome = window.location.pathname === "/";
  return (
    <>
      {isMobile ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <nav id="menu" className="menu__body">
            <ul className="menu__list">
              {isHome ? (
                <>
                  <li className="menu__item">
                    <div className="translate" />
                    <a href="/apps" className="menu__link">
                      Mini-Apps
                    </a>
                  </li>
                  <li className="menu__item">
                    <div className="translate" />
                    <a href="#about" className="menu__link">
                      ABOUT
                    </a>
                  </li>
                  <li className="menu__item">
                    <div className="translate" />
                    <a href="#service" className="menu__link">
                      SERVICE
                    </a>
                  </li>
                  <li className="menu__item">
                    <div className="translate" />
                    <a href="#experience" className="menu__link">
                      Work Experience
                    </a>
                  </li>
                </>
              ) : (
                <li className="menu__item">
                  <div className="translate" />
                  <a href="/" className="menu__link">
                    HOME
                  </a>
                </li>
              )}
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
