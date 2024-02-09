import { useEffect, useState } from "react";

type Rates = {
  [key: string]: number;
};

type useConverterReturn = {
  from: string;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  to: string;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  fromPrice: number;
  toPrice: number;
  OnChangeFromPrice: (value: number) => void;
  OnChangeToPrice: (value: number) => void;
};

export type Currenc = { name: string; title: string };

export const useConverterHook = (): useConverterReturn => {
  const [from, setFrom] = useState("RUB");
  const [to, setTo] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const [rates, setRates] = useState<Rates>({});

  const OnChangeFromPrice = (value: number) => {
    const result = (value / rates[from]) * rates[to];

    setToPrice(result);
    setFromPrice(value);
  };

  const OnChangeToPrice = (value: number) => {
    const result = (rates[from] / rates[to]) * value;

    setFromPrice(result);
    setToPrice(value);
  };

  const options = {
    headers: {
      apikey: "fca_live_pPrhoCSGi8rDTgZuV9AbHtv4EcXnI7KcBNyLUUcY",
    },
  };

  useEffect(() => {
    fetch("https://api.freecurrencyapi.com/v1/latest", options)
      .then((response) => response.json())
      .then((json) => {
        setRates(json.data);
      })
      .catch((error) => {
        console.warn(error);
        alert("Не удалось получить информацию");
      });
  }, []);

  useEffect(() => {
    OnChangeFromPrice(fromPrice);
  }, [from]);

  useEffect(() => {
    OnChangeToPrice(toPrice);
  }, [to]);

  return {
    from,
    setFrom,
    to,
    setTo,
    fromPrice,
    toPrice,
    OnChangeFromPrice,
    OnChangeToPrice,
  };
};
