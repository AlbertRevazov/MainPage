import { useTheme } from "./hook";
import Switch from "@mui/material/Switch";
import { Icon } from "../Icon";
import "./styles.css";

export const Switcher = () => {
  const { theme, handleChange } = useTheme("light");

  return (
    <div className="root">
      <Icon src="/img/light_icon.png" alt="sun" width={20} height={20} />
      <Switch
        onChange={handleChange}
        checked={theme === "dark"}
        color="warning"
      />
      <Icon src="/img/dark_icon.png" alt="moon" width={20} height={20} />
    </div>
  );
};
