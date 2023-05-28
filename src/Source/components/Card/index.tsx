import React, { FC } from "react";
import "./styles.css";
import { Icon } from "../Icon";

interface CardProps {
  title: string;
  description: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const Card: FC<CardProps> = ({
  title,
  description,
  alt,
  height,
  src,
  width,
}) => {
  return (
    <div className="card__wrapper">
      <div className="card__icon">
        <Icon src={src} alt={alt} width={width} height={height} />
      </div>
      <div className="card__title">{title}</div>
      <div className="card__description">{description}</div>
    </div>
  );
};
