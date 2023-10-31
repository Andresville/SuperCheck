import styled from "styled-components";
import { firstColor, thirdColor } from "../UI/Variables"

export const Card = styled.div`
    height: 30vh;
    background-color: ${thirdColor};
    display:flex;
    flex-direction:row;
    justify-content: center;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 2vw;
    align-items: center;
    color: ${firstColor};
    font-size: 2em;
` 