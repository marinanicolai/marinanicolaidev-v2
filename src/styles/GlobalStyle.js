import { createGlobalStyle } from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`

:root {
    --rich-black-fogra-29: #011627ff;
  }

body {
    background: ${({ theme }) => theme.color.background}; 

    h1 {
    color: inherit;
} 
}


`;

export default GlobalStyle;
