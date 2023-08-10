import React, { FC } from "react";
import "./styles.css";

interface InputsProps {
    copyHandler: () => void;
    userInput: string | undefined;
    userInputhandler: React.ChangeEventHandler<HTMLInputElement>;
    result: string | undefined;
    copied: boolean;
}

export const Inputs: FC<InputsProps> = ({
    copyHandler,
    userInput,
    userInputhandler,
    result,
    copied,
}) => {
    return (
        <div className="input__wrapper">
            <div className="add__input__wrap">
                <input
                    type="text"
                    readOnly
                    defaultValue={result}
                    className="passInput"
                />

                <button
                    className={
                        !result ? "disabled__button" : copied ? "copied" : "button__small"
                    }
                    onClick={copyHandler}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <div className="add__input__wrap">
                <input
                    type="text"
                    name="user"
                    value={userInput}
                    className="add__input"
                    placeholder="Add your name or birth date"
                    onChange={userInputhandler}
                />
            </div>
        </div>
    );
};
