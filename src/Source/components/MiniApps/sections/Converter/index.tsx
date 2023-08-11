import React, { FC, useEffect } from "react";
import "./styles.css";
import { Block } from "./Block/Block";
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
  } = useConverterHook();

  return (
    <div className="converter">
      <div className="converter__root __container ">
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
          <Block
            value={!!toPrice ? toPrice : 0}
            currency={to}
            onChangeCurrency={setTo}
            onChangeValue={OnChangeToPrice}
          />
        </div>
        <div>
          <h2 className="api__title">
           * the data is taken from the source -
            <a target="_blank" href="freecurrencyapi.com">
              freecurrencyapi.com
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};
