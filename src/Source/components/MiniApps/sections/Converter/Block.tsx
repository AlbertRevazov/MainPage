import React, { Dispatch, FC, SetStateAction } from "react";
import { TextField } from "@mui/material";

import "./styles.css";

const defaultCurrencies = ["RUB", "USD", "EUR", "GBP"];

interface BlockProps {
  value: number;
  currency: string;
  onChangeValue: (value: number) => void;
  onChangeCurrency: Dispatch<SetStateAction<string>>;
}

export const Block: FC<BlockProps> = ({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}) => {
  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? "active" : "currency__item"}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </ul>
      <div className="input__wrap">
        <input
          color="warning"
          className="input__cur"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChangeValue(Number(event.currentTarget.value))
          }
          value={value}
        />
      </div>
    </div>
  );
};
