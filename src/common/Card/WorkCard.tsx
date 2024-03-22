import { FC } from "react";
import { Icon } from "../Icon";
import { useHookCards } from "./hooks";
import { IWorkCardProps } from "../../types";



export const WorkCard: FC<IWorkCardProps> = ({ item, alt }) => {
  const { handleMouseEnter, handleMouseLeave, hoverStyle } = useHookCards();
  return (
    <div
      className="card__wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card__icon">
        <Icon
          src={item.src}
          alt={alt}
          width={item.width}
          height={item.height}
        />
      </div>
      <div className="card__title">{item.title}</div>
      <div className="card__description">{item.description}</div>
    </div>
  );
};
