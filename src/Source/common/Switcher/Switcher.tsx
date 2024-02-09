import { FC, memo } from "react";
import { Theme, useTheme } from "./hook";
import { Icon } from "../Icon";
import Switch from "@mui/material/Switch";
import "./styles.css";

export const Switcher: FC = memo(() => {
  const mod = localStorage.getItem("mode") as Theme;

  const { handleChange } = useTheme(mod);

  return (
    <div className="root">
      <Icon src="/img/light_icon.png" alt="sun" width={20} height={20} />
      <Switch
        onChange={handleChange}
        checked={mod === "dark"}
        color="warning"
      />
      <Icon src="/img/dark_icon.png" alt="moon" width={20} height={20} />
    </div>
  );
});
