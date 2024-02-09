import { FC } from "react";
interface IconProps {
  src: string | undefined;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}
export const Icon: FC<IconProps> = ({
  src,
  alt,
  className,
  width = 60,
  height = 60,
}) => {
  return (
    <>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={className}
        width={`${width}px`}
        height={`${height}px`}
        title={alt}
      />
    </>
  );
};
