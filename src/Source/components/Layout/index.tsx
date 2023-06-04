import { FC, ReactNode } from "react";
import { Navbar } from "../Nav";
import "./styles.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <header className="layout__nav">
        <div className="layout__container">
          <a href="/" className="layout__logo">
            <span className="first__letter">R</span>EVAZ
          </a>
          <div className="layout__menu menu">
            <Navbar />
          </div>
          <div className="layout__button">
            <a href="#contact" className="button button_blue">
              CONTACT
            </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="footer">
        <p>Copyright</p> <b>A.Revazov</b> <p>2023 All Right Reserved</p>
      </footer>
    </div>
  );
};
