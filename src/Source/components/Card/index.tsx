import { FC } from "react";
import { Icon } from "../Icon";
import { CardProps, useHookCards } from "./hooks";
import "./styles.css";
import { useMediaQuery } from "@mui/material";

export const Card: FC<CardProps> = ({
  title,
  description,
  alt,
  height,
  src,
  srcLight,
  width,
  isWork,
}) => {
  const { handleMouseEnter, handleMouseLeave, isHover, hoverStyle } =
    useHookCards();

  const isMobile = useMediaQuery("(max-width:767.98px)");
  return (
    <>
      {!isWork ? (
        <div
          className="card__wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card__icon">
            <Icon
              src={!isMobile ? (isHover ? srcLight : src) : src}
              alt={alt}
              width={width}
              height={height}
            />
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
