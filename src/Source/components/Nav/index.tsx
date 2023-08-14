import { FC } from "react";
import { Switcher } from "../Switcher/Switcher";
import "./styles.css";

export const Navbar: FC = () => {
  const isHome = window.location.pathname === "/";
  return (
    <>
   
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
    </>
  );
};
