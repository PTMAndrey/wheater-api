import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { GlobalContext } from "../../context/GlobalContext";
import useStateProvider from "../../hooks/useStateProvider";

// 1.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
`;

// 2.
const Theme = ({ children }) => {
  const {customTheme} = useStateProvider();

  const darkTheme = {
    background: "#0f0e17",
    footer: "#18183a",
    navBar: "#374151",
    navBarColor: "#fff",
    text: "#a7a9be",
    button: "#ff8906",
    buttonHover: "#c26a05",
    cardBG: "#1a0e41",
    colorCard: "#a7a9be",
  };

  const lightTheme = {
    background: "#f0f7f6",
    footer: "#0f0e17",
    navBar: "#c9eeee",
    navBarColor: "#000",
    text: "#2d334a",
    button: "#d8b800",
    buttonHover: "#8dc0c0",
    cardBG: "#518d85",
    colorCard: "black",
  };

  const fluffyTheme = {
    background: "#faeee7",
    footer: "#0f0e17",
    navBar: "#E5E7EB",
    navBarColor: "#000",
    text: "#594a4e",
    button: "#ff8ba7",
    buttonHover: "#c56d82",
    cardBG: "#d9d4e7",
    colorCard: "#000",
  };

  const rainTheme = {
    background: 'linear-gradient(180deg, rgba(2,0,0,1) 0%, rgba(9,9,80,1) 70%, rgba(0,9,155,1) 100%)',
    footer: "#0f0e17",
    navBar: "#0c516d",
    navBarColor: "#fff",
    text: "#fff",
    button: "#2b4759",
    buttonHover: "#1a2c38",
    cardBG: "#0c516d",
    colorCard: "#fff",
  };


  // 3.
  const currentTheme = useContext(GlobalContext);

  // 4.
  let theme;
  switch (currentTheme.theme) {
    case "dark":
      theme = darkTheme;
      break;
    case "light":
      theme = lightTheme;
      break;
    case "fluffy":
      theme = fluffyTheme;
      break;
    case "rain":
      theme = rainTheme;
      break;
    case 'custom':
      theme = customTheme.colors;
      break;
    default:
      theme = lightTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Theme;