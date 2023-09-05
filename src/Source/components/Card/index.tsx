import { FC } from "react";
import { Icon } from "../Icon";
import { CardProps, useHookCards } from "./hooks";
import "./styles.css";

export const Card: FC<CardProps> = ({
  title,
  description,
  alt,
  height,
  src,
  width,
  isWork,
}) => {
  const { handleMouseEnter, handleMouseLeave, hoverStyle } = useHookCards();
  return (
    <>
      {!isWork ? (
        <div className="card__root">
          <div className="card">
            <div className="front">
              <p>{title}</p>
              <img className="card__image" src={src} alt={title} />
            </div>
            <div className="back">
              <div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="work__experience__wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            className="work__experience__image"
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
          <div className="work__experience__icon__text" style={hoverStyle}>
            <h2>{title}</h2>
            <h4>
              {description.split("\n").map((string) => (
                <div key={string}>
                  {string}
                  <br />
                </div>
              ))}
            </h4>
          </div>
        </div>
      )}
    </>
  );
};
