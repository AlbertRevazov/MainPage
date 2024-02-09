import { useState } from "react";

type useRandomizerReturn = {
  min: number;
  max: number;
  handleMinChange: React.ChangeEventHandler<HTMLInputElement>;
  handleMaxChange: React.ChangeEventHandler<HTMLInputElement>;
  handleGenerate: React.MouseEventHandler<HTMLButtonElement>;
  btnClassName: "disabled" | "res__loading" | "btn__random";
  btnSubmit: React.MouseEventHandler<HTMLButtonElement>;
  result: number;
  load: boolean;
  copied: boolean;
  copyHandler: () => void;
  iconClassName: "copy__icon__disable" | "copied__icon" | "copy__icon";
};

export const useRandomizerHook = (): useRandomizerReturn => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  const [load, setload] = useState<boolean>(false);

  const handleMinChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const isDigit = Number(event.currentTarget.value);

    if (isDigit) {
      setMin(isDigit);
    }
  };

  const handleMaxChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const isDigit = Number(event.currentTarget.value);

    if (isDigit) {
      setMax(isDigit);
    }
  };

  const handleGenerate: React.MouseEventHandler<HTMLButtonElement> = () => {
    setload(true);
    const res = Math.round(Math.random() * (max - min) + min);
    if (min > max) {
      alert("Min is greater than max");
      setload(false);
      setResult(0);
    } else {
      setTimeout(() => {
        setload(false);
        setResult(res);
        console.log("meow", result);
      }, 1500);
    }
  };

  // Функция для копирования числа
  function copyHandler() {
    if (result) {
      navigator.clipboard.writeText(String(result));
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }

  const btnClassName =
    max === 0 ? (!load ? "disabled" : "res__loading") : "btn__random";

  const btnSubmit =
    max === 0
      ? () => {
          alert("Enter max value");
        }
      : handleGenerate;

  const iconClassName =
    !result && result !== 0
      ? "copy__icon__disable"
      : copied
      ? "copied__icon"
      : "copy__icon";

  return {
    min,
    max,
    handleMinChange,
    handleMaxChange,
    handleGenerate,
    btnClassName,
    btnSubmit,
    result,
    load,
    copied,
    copyHandler,
    iconClassName,
  };
};
