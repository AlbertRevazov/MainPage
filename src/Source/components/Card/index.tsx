import { FC } from "react";
import { Icon } from "../Icon";
import "./styles.css";

interface CardProps {
  title: string;
  description: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isWork?: boolean;
}

export const Card: FC<CardProps> = ({
  title,
  description,
  alt,
  height,
  src,
  width,
  isWork,
}) => {
  return (
    <>
      {!isWork ? (
        <div className="card__wrapper">
          <div className="card__icon">
            <Icon src={src} alt={alt} width={width} height={height} />
          </div>
          <div className="card__title">{title}</div>
          <div className="card__description">{description}</div>
        </div>
      ) : (
        <a className="work__experience__wrapper" onClick={() => {}}>
          <Icon
            className="work__experience__image"
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
          <div className="work__experience__icon__text">
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
        </a>
      )}
    </>
  );
};
