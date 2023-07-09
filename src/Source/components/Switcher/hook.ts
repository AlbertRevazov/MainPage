import { useEffect, useState } from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Theme = "dark" | "light";

type useThemeReturn = {
  theme: string;
  handleChange: (e: ChangeEvent) => void;
};

export const useTheme = (initialTheme: Theme): useThemeReturn => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const mode = localStorage.getItem("mode");
  const handleChange = (e: ChangeEvent) =>
    setTheme(e.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, handleChange };
};
