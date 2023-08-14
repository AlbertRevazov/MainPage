import { useState } from "react";

export const useRandomizerHook = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [load, setload] = useState<boolean>(false);

  const handleMinChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setMin(Number(event.currentTarget.value));
  };

  const handleMaxChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setMax(Number(event.currentTarget.value));
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

  return {
    min,
    max,
    result,
    handleMinChange,
    handleMaxChange,
    handleGenerate,
    load,
  };
};
