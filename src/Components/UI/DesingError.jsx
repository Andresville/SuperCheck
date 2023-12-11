import styled from "styled-components";
import { firstColor, secondColor } from "./Variables";


export const E404 = styled.h2`
    margin: 5% 10% 0;
    color: ${firstColor};
    font-size: 8rem;
    text-align: center;
    @media(max-width: 425px){
    font-size:5rem;
    color: ${secondColor};
    margin: 40% 2% 0;
}
`

export const Page = styled.h3`
    margin: 2% 10% 0;
    color: ${firstColor};
    font-size: 5rem;
    text-align: center;
    @media(max-width: 425px){
    font-size:2.5rem;
    color: ${secondColor};
}
`