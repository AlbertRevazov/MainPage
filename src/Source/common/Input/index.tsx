import React, { FC } from "react";

interface IInputProps {
  name: string;
  maxLength: number;
  className: string;
  value: number | string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input: FC<IInputProps> = ({
  maxLength,
  className,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      type="text"
      name={name}
      maxLength={maxLength}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};
