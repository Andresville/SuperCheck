import styled from "styled-components";
import { fifthColor, firstColor, fourthColor } from "./Variables";

export const Title = styled.h2`
    margin-top: 2vh;
    margin-left: 15vw;
    font-size: 3rem;
    color: ${fifthColor};
    text-align: left;
  `

export const Button = styled.button`
    background-color: ${fourthColor};
    width: 8vw;
    height: 3vh;
    border-radius: 20px;
    color: ${firstColor};
    cursor: pointer;
`

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const StyleItemList = styled.div`
    width: 20vw;
    height: 18vh;
    background-color: ${fifthColor};
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    box-shadow: 4px 4px 4px 0px rgba(255, 250, 250, 0.25);
    border-radius: 20px;
    margin: 2vw;
    align-items:center;
    text-align: center;
    color: ${fourthColor};
    font-size: .8rem;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-weight: 300;
        line-height: 1.3rem;
    }
`

