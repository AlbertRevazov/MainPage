import { FC } from "react";
import { Icon } from "../Icon";
import { CardProps, useHookCards } from "./hooks";
import { useMediaQuery } from "@mui/material";
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
  const { handleMouseEnter, handleMouseLeave, isHover, hoverStyle } =
    useHookCards();
  return (
    <>
      {!isWork ? (
        <div
          className="card__wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card__icon">
            <Icon src={src} alt={alt} width={width} height={height} />
          </div>
          <div className="card__title">{title}</div>
          <div className="card__description">{description}</div>
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
