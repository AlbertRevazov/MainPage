import React from "react";
import "./styles.css";
export const HeaderBlock = () => {
  return (
    <div className="container">
      <div className="wrapper__container">
        <div className="hello">
          <h2 className="header__title">
            <span className="header__hello"> Hello,</span> I’m
          </h2>
          <div className="hero__name">
            <div className="hero__bio">
              <h1>ALBERT REVAZOV</h1>
              <span className={"hero__bio line"} />
            </div>
          </div>
          <h3 className="header__subtitle"> Frontend Developer</h3>,
        </div>
        <div className={"hero__links-wrapper"}>
          <img className={"hero__image"} src="/img/abe.png" alt="pic" />
          <div className="social__media ">
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
        </div>
      </div>
      <img className={"hero__bg"} src="/img/bg.png" alt="bg" />
    </div>
  );
};
