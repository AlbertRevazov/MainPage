import { FC } from "react";
import { useRandomizerHook } from "./hooks";
import { Input } from "../../../../common/Input";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const Randomizerlabels: FC = () => {
  const {
    result,
    load,
    copyHandler,
    btnClassName,
    btnSubmit,
    max,
    min,
    handleMinChange,
    handleMaxChange,
    iconClassName,
  } = useRandomizerHook();
  return (
    <>
      <div className="inputs__random">
        <div className="inputs__wrap">
          <Input
            name="min"
            maxLength={15}
            className="textfield min"
            value={min}
            onChange={handleMinChange}
          />
          <h3>Minimal value</h3>
        </div>
        <div className="inputs__wrap">
          <Input
            name="max"
            maxLength={15}
            className="textfield max"
            value={max}
            onChange={handleMaxChange}
          />
          <h3>Maximal value</h3>
        </div>
      </div>
      <div className="btn__wrap">
        <button type="button" className={btnClassName} onClick={btnSubmit}>
          Generate
        </button>
      </div>
      <div className="inputs__random">
        <Input
          name="result"
          className={!load ? "result" : "res__loading"}
          value={!load ? result : "Loading..."}
          maxLength={15}
          onChange={() => {}}
        />
        {!load && (
          <ContentCopyIcon className={iconClassName} onClick={copyHandler} />
        )}
      </div>
    </>
  );
};
