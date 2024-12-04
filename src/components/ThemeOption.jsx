import React from "react";

const ThemeOption = ({ theme }) => {
  const setTheme = () => {
    document.querySelector("body").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <button
      className="theme-option"
      id={`theme-${theme}`}
      onClick={setTheme}
      aria-label={`${theme} theme`}
    ></button>
  );
};

export default ThemeOption;
