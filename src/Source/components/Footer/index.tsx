import { FC } from "react";
import "./styles.css";

export const Footer: FC = () => {
  const isHome = window.location.pathname === "/";

  return (
    <footer className={isHome ? "home__contact" : "apps__contact"}>
      <p>Copyright</p> <b>A.Revazov</b> <p>2023 All Right Reserved</p>
    </footer>
  );
};
