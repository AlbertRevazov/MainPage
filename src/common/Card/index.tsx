import { FC } from "react";
import { Icon } from "../Icon";
import { useHookCards } from "./hooks";
import { WorkCard } from "./WorkCard";
import { IWorkCardProps } from "../../types";
import "./styles.css";

interface CardProps extends IWorkCardProps {
  isWork?: boolean;
}

export const Card: FC<CardProps> = ({ item, alt, isWork }) => {
  const { handleMouseEnter, handleMouseLeave, hoverStyle } = useHookCards();
  return (
    <>
      {!isWork ? (
        <WorkCard item={item} alt={item.title} />
      ) : (
        <div
          className="work__experience__wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            className="work__experience__image"
            src={item.src}
            alt={alt}
            width={item.width}
            height={item.height}
          />
          <div className="work__experience__icon__text" style={hoverStyle}>
            <h2>{item.title}</h2>
            <h4>
              {item.description.split("\n").map((string) => (
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
