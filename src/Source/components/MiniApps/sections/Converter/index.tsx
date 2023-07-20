import React, { FC, useEffect } from "react";
import "./styles.css";
import { Block } from "./Block";
import { useConverterHook } from "./hooks";

export const Converter: FC = () => {
  const {
    from,
    setFrom,
    to,
    setTo,
    fromPrice,
    toPrice,
    OnChangeFromPrice,
    OnChangeToPrice,
    SwitchCurrency,
    currencyValuesArray,
  } = useConverterHook();

  return (
    <div className="converter">
      <div className="converter__container ">
        <h2 className="converter__title">
          <span> 02</span> Currency Converter
        </h2>
        <div className="blocks__wrap">
          <Block
            value={!!fromPrice ? fromPrice : 0}
            currency={from}
            onChangeCurrency={setFrom}
            onChangeValue={OnChangeFromPrice}
          />
          <div className="switcher__cur">
            <img src="/img/arrow_left.png" alt="left" width={40} height={40} />
            <img
              src="/img/arrow_right.png"
              alt="right"
              width={40}
              height={40}
            />
          </div>
          <Block
            value={!!toPrice ? toPrice : 0}
            currency={to}
            onChangeCurrency={setTo}
            onChangeValue={OnChangeToPrice}
          />
        </div>
      </div>
    </div>
  );
};
