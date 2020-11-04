import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (value) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", value);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
