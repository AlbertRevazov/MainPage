import { useCallback, useEffect, useState } from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type Theme = "dark" | "light";

type useThemeReturn = {
  handleChange: (e: ChangeEvent) => void;
};

export const useTheme = (initialTheme: Theme): useThemeReturn => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const handleChange = useCallback((e: ChangeEvent) => {
    const currentMode = e.currentTarget.checked ? "dark" : "light";
    setTheme(currentMode);
    localStorage.setItem("mode", currentMode);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { handleChange };
};
