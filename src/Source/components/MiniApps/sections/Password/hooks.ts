import { useState } from "react";

type usePasswordReturn = {
  handleChangeLength: React.FocusEventHandler<HTMLSelectElement>;
  animationhandler: () => void;
  copyHandler: () => void;
  animated: boolean;
  userInput: string;
  userInputhandler: React.ChangeEventHandler<HTMLInputElement>;
  handleUserInput: () => void;
  result: string;
  copied: boolean;
  passwordlengthValues: string[];
  boxHandler: () => void;
};

export const usePasswordGenerateHook = (): usePasswordReturn => {
  // Переменные для создания пароля и для определения его длины
  let chars = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  const symbols = "!@#$()_?.;:";
  const passwordlengthValues = ["8", "9", "10", "11", "12"];

  // Создаём состояния
  const [result, setResult] = useState("");
  const [userInputStatus, setUserInputStatus] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [passwordLength, setpasswordLength] = useState(passwordlengthValues[0]);
  const [box, setBox] = useState(false);
  const [copied, setCopied] = useState(false);
  const [animated, setAnimated] = useState(false);
  // Записываем текущую длину пароля
  const handleChangeLength: React.FocusEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setpasswordLength(event.currentTarget.value);
  };

  // Изменяем состояние чекбокса
  const boxHandler = () => {
    setBox(!box);
  };

  // Изменяем состяние для отображения инпута или кнопки
  const handleUserInput = () => {
    setUserInputStatus(!userInputStatus);
  };

  // Здесь мы сохраняем ввод юзера
  const userInputhandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUserInput(event.currentTarget.value);
  };

  // Функция для копирования пароля
  function copyHandler() {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }

  const animationhandler = () => {
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
      handlePasswordGenerate();
    }, 1800);
  };

  const handlePasswordGenerate = () => {
    // Переменная куда мы запишем итоговый результат
    let currentResult = "";

    // Функция для валидации ввода юзера
    const isvalidateUserInput = () => {
      const splittedUserInput = userInput
        .split("")
        .filter((el) => chars.includes(el));

      //Проверка на латиницу
      if (splittedUserInput.length !== userInput.length) {
        alert("Пожалуйста введите латиницей");
        return false;

        // Проверка на длину итогового пароля
      } else if (splittedUserInput.length > Number(passwordLength)) {
        alert("Введите количество символов меньше длины итогового пароля");
        return false;
      } else {
        return true;
      }
    };

    // Проверка на валидацию
    if (isvalidateUserInput() === true) {
      currentResult = userInput;
      // Добавляем символы к нашим буквам
      if (box) {
        chars += symbols;
      }
      // Отнимаем длину ввода от длины итогового пароля
      const passlength = +passwordLength - currentResult.length;
      for (let i = 0; i < passlength; i++) {
        let randomNum = Math.floor(Math.random() * chars.length);
        currentResult += chars[randomNum];
      }
    } else {
      for (let i = 0; i < +passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * chars.length);
        currentResult += chars[randomNum];
      }
    }

    // Записываем конечную строку в наш соответсвующий state
    setResult(currentResult);
  };
  return {
    handleChangeLength,
    animationhandler,
    copyHandler,
    animated,
    userInput,
    userInputhandler,
    handleUserInput,
    result,
    copied,
    passwordlengthValues,
    boxHandler,
  };
};
