import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Theme, setTheme } from "./theme-slice";
import { selectTheme } from "./theme-selectors";

export const useTheme = (): [Theme, () => void] => {
  const theme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
