import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import { GlobalContext } from "../../context/GlobalContext";
import useWindowDimensions from "../../hooks/useWindowDimmensions";

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
  const {width} = useWindowDimensions();

  const darkTheme = {
    background: "#0f0e17",
    secondaryBackground: "#18183a",
    navBar: "#374151", //#a87703
    text: "#a7a9be",
    button: "#ff8906",
    buttonHover: "#c26a05",
  };

  const lightTheme = {
    background: "#e5f7f5",
    secondaryBackground: "#0f0e17",//272343
    navBar: "#bae8e8", // #ba8500
    text: "#2d334a",
    button: "#ffd803",
    buttonHover: "#bae8e8",
  };

  const fluffyTheme = {
    background: "#faeee7",
    secondaryBackground: "#0f0e17",
    navBar: "#E5E7EB", // #663742 
    text: "#594a4e",
    button: "#ff8ba7",
    buttonHover: "#c56d82",
  };

  const rainTheme = {
    background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%)',
    secondaryBackground: "#0f0e17",
    navBar: "#4d8db8", // #4d8db8
    text: "#fff",
    button: "#2b4759", // #2b4759 try it 
    buttonHover: "#1a2c38",
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
    default:
      theme = lightTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
      {/* <main className={styles.layout}><div className={styles.container}>{children}</div></main>; */}
    </ThemeProvider>
  );
};

export default Theme;