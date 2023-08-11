import React, { FC } from "react";
import { Checkbox } from "@mui/material";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import "./styles.css";

interface CheckboxSelectProps {
  handleChangeLength: React.FocusEventHandler<HTMLSelectElement>;
  passwordlengthValues: string[];
  boxHandler: () => void;
}

export const CheckboxSelect: FC<CheckboxSelectProps> = ({
  handleChangeLength,
  passwordlengthValues,
  boxHandler,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="select__input">
        <span className="select__title">Password length</span>
        <select onBlur={handleChangeLength} className="select">
          {passwordlengthValues.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="checkbox__input">
        <label className="checkbox__title" htmlFor="symbols">
          Use symbols
        </label>
        <Checkbox
          className="check"
          color="success"
          {...label}
          icon={<UnpublishedOutlinedIcon />}
          checkedIcon={<TaskAltOutlinedIcon />}
          defaultChecked={false}
          onChange={boxHandler}
        />
      </div>
    </>
  );
};
