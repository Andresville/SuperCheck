import { createGlobalStyle } from "styled-components";
import comprasOnline from "../src/assets/imagen/comprasOnline.jpg";


export const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    
    }
    body{
    background-image: url(${comprasOnline});
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    }
`

