import { createGlobalStyle } from "styled-components";
import comprasOnline from "../src/assets/imagen/comprasOnline.jpg";
import fondopantalla from "../src/assets/imagen/fondopantalla.svg";

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
    @media(max-width: 425px){
        background-image: url(${fondopantalla});
    }
    }
`

