import { FC } from "react";
import { Icon } from "../Icon";

interface ILabelProps {
  title: string;
  subtitle: string;
  src: string;
}

export const Label: FC<ILabelProps> = ({ title, subtitle, src }) => {
  return (
    <div className="contact__item__wrapper">
      <Icon src={src} alt="icon" width={19} height={19} />
      <div className="contact__item">
        <h4 className="title">{title}</h4>
        <h6 className="subtitle">{subtitle}</h6>
      </div>
    </div>
  );
};
