import styled from "styled-components";
import { fifthColor, firstColor, fourthColor } from "./Variables";

export const TitleItem = styled.h2`
    margin-top: 5vh;
    margin-left: 10vw;
    font-size: 2rem;
    color: ${fifthColor};
    text-align: left;
  `

export const ButtonItem = styled.button`
    background-color: ${fourthColor};
    width: 10vw;
    height: 10vh;
    border-radius: 20px;
    color: ${firstColor};
    margin-top: 2rem;
`

export const ContainerItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const StyleItem = styled.div`
    width: 80vw;
    height: 50vh;
    background-color: ${fifthColor};
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 4px 4px 4px 0px rgba(255, 250, 250, 0.25);
    border-radius: 20px;
    margin: 2vw 10vw;
    align-items:center;
    text-align: center;
    color: ${fourthColor};
    font-size: 1.8rem;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-weight: 300;
        line-height: 2.5rem;
    }
`

export const ContBnt = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    margin-top: .5rem;
`

export const StyleBtnAddSubtract = styled.button`
    background-color: ${fourthColor};
    color: ${firstColor};
    border-color: ${fourthColor};
    text-align: center;
    width: 3rem;
    height: 2.5rem;
`

export const Amount = styled.div`
    background-color: ${firstColor};
    color: ${fourthColor};
    border: 1px solid  ${fourthColor}; 
    text-align: center;
    width: 4rem;
    height: 2.5rem;
    font-size: 2rem
`