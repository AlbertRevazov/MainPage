import { FC, ReactNode } from "react";
import { Navbar } from "../Nav";
import { useMediaQuery } from "@mui/material";
import "./styles.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:850.98px)");
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
          {!isMobile && (
            <div className="layout__button">
              <a href="#contact" className="button">
                CONTACT
              </a>
            </div>
          )}
        </div>
      </header>
      {children}
    </div>
  );
};
export default Layout;