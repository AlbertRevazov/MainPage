import { FC } from "react";
import "./styles.css";

export const Footer: FC = () => {
  const isHome = window.location.pathname === "/";

  return (
    <div className={isHome ? "home__contact footer" : "apps__contact footer"}>
      <p>Copyright</p> <span>A.Revazov</span> <p>2023 All Right Reserved</p>
    </div>
  );
};
