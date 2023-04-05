import React, { useState } from "react";

export const GlobalContext = React.createContext({
  currentTheme: "",
  themeSwitchHandler: () => {},
});

export const GlobalContextProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("theme") == null
      ? "light"
      : window.localStorage.getItem("theme")
  ); 

  const themeSwitchHandler = (themeType) => {
    setCurrentTheme(themeType);
  };

  
  return (
    <GlobalContext.Provider
      value={{
        theme: currentTheme,
        themeSwitchHandler: themeSwitchHandler,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};