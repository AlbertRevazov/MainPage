import { useEffect, useState } from "react";

type Rates = {
  [key: string]: number;
};

export type Currenc = { name: string; title: string };
type currencyArray = Currenc[];

const currencyValuesArray: currencyArray = [
  { name: "AUD", title: "Australian Dollar" },
  { name: "BRL", title: "Brazilian Real" },
  { name: "BGN", title: "Bulgarian Lev" },
  { name: "CAD", title: "Canadian Dollar" },
  { name: "CNY", title: "Chinese Yuan" },
  { name: "HRK", title: "Croatian Kuna" },
  { name: "CZK", title: "Czech Republic Koruna" },
  { name: "DKK", title: "Danish Krone" },
  { name: "HKD", title: "Hong Kong Dollar" },
  { name: "HUF", title: "Hungarian Forint" },
  { name: "ISK", title: "Icelandic Króna" },
  { name: "INR", title: "Indian Rupee" },
  { name: "IDR", title: "Indonesian Rupiah" },
  { name: "ILS", title: "Israeli New Sheqel" },
  { name: "JPY", title: "Japanese Yen" },
  { name: "MYR", title: "Malaysian Ringgit" },
  { name: "MXN", title: "Mexican Peso" },
  { name: "NZD", title: "New Zealand Dollar" },
  { name: "NOK", title: "Norwegian Krone" },
  { name: "PHP", title: "Philippine Peso" },
  { name: "PLN", title: "Polish Zloty" },
  { name: "RON", title: "Romanian Leu" },
  { name: "SGD", title: "Singapore Dollar" },
  { name: "ZAR", title: "South African Rand" },
  { name: "KRW", title: "South Korean Won" },
  { name: "SEK", title: "Swedish Krona" },
  { name: "CHF", title: "Swiss Franc" },
  { name: "THB", title: "Thai Baht" },
  { name: "TRY", title: "Turkish Lira" },
];

export const useConverterHook = () => {
  const [from, setFrom] = useState("RUB");
  const [to, setTo] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const [rates, setRates] = useState<Rates>({});

  console.log(rates);

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

  const SwitchCurrency = () => {
    setFrom(to);
    setTo(from);
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
    SwitchCurrency,
    rates,
    currencyValuesArray,
  };
};
