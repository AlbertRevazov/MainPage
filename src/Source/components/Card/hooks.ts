import React from "react";
export interface CardProps {
  title: string;
  description: string;
  src: string;
  srcLight?: string | "";
  alt: string;
  width?: number;
  height?: number;
  isWork?: boolean;
}
export const useHookCards = () => {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const hoverStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.59)",
    top: "0",
    left: isHover ? 0 : "100%",
    width: "100%",
    height: "100%",
    padding: "15px",
    transition: "0.5s",
  };
  return { handleMouseEnter, isHover, handleMouseLeave, hoverStyle };
};
