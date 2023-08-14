import { useState } from "react";

export const useRandomizerHook = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  const [load, setload] = useState<boolean>(false);

  const handleMinChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const isDigit = event.currentTarget.value;

    if (isDigit) {
      setMin(Number(isDigit));
    }
  };

  const handleMaxChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const isDigit = event.currentTarget.value;

    if (isDigit) {
      setMax(Number(isDigit));
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

  return {
    min,
    max,
    result,
    handleMinChange,
    handleMaxChange,
    handleGenerate,
    load,
    copied,
    copyHandler,
  };
};
