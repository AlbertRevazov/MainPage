import { FC } from "react";
import "./styles.css";

interface LinksProps {
  className?: string;
}

export const Links: FC<LinksProps> = ({ className }) => {
  const style = !className ? "social__media" : className;
  return (
    <div className={style}>
      <a href="https://www.instagram.com/aberevaz" className="link__item">
        <img src="/img/icons/inst.png" alt="icon-inst" />
      </a>

      <a href="https://vk.com/abe_revaz" className="link__item">
        <img src="/img/icons/vk.png" alt="icon-vk" />
      </a>

      <a
        href="https://www.linkedin.com/in/albertrevazov17/"
        className="link__item"
      >
        <img src="/img/icons/linkedin.png" alt="icon-linked" />
      </a>

      <a href="https://github.com/AlbertRevazov" className="link__item">
        <img src="/img/icons/git.png" alt="icon-git" />
      </a>
    </div>
  );
};
