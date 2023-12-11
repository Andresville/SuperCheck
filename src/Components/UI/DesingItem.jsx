import styled from "styled-components";
import { fifthColor, firstColor, fourthColor } from "./Variables";

export const TitleItem = styled.h2`
    margin-top: 5vh;
    margin-left: 10vw;
    font-size: 2rem;
    color: ${fifthColor};
    text-align: left;
    @media(max-width: 425px){
      color: ${fourthColor};
      font-size: 1rem;
  }
  `

export const ButtonItem = styled.button`
    background-color: ${(props) => props.color || fourthColor};
    width: 10vw;
    height: 10vh;
    border: none;
    border-radius: 20px;
    transition: 200ms;
    color: ${firstColor};
    margin-top: 2rem;
    margin-left: ${(props) => props.$marginleft};
    font-size: 1rem;
    cursor: pointer;
        &:hover{
            box-shadow: 0 .5rem 0.5rem ${(props) => props.$shadow};
    }
    @media(max-width: 425px){
    width: 50vw;
    height: 5vh;
    margin: 1rem;
}

`

export const ContainerItem = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const StyleItem = styled.div`
    width: ${(props) => props.$wStyleItem};
    height: ${(props) => props.$hStyleItem};
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
    @media(max-width: 425px){
    width: auto;
    min-width: 70vw;
    height: auto;
    min-height: 40vh;
    margin-top: 10vw;
    font-size: 1rem;
}
`

export const ItemImage = styled.img`
    width: ${(props) => props.$w};
    height: ${(props) => props.$h};
    transition: 300ms;
    cursor: zoom-in;
    margin: .5rem 0;
    &:hover{
    transform: scale(2);
    border-radius: 10%;
    box-shadow: 0 1rem .8rem #070707;
}
    @media(max-width: 425px){
    width: 10rem;
    height: 10rem;
}
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-weight: 300;
        line-height: 2.5rem;
    }
    @media(max-width: 425px){
        span{
            line-height: 1.5rem;
        }
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
    @media(max-width: 425px){
    width: 2rem;
    height: 2rem;
}
`

export const Amount = styled.div`
    background-color: ${firstColor};
    color: ${fourthColor};
    border: 1px solid  ${fourthColor}; 
    text-align: center;
    width: 4rem;
    height: 2.5rem;
    font-size: 2rem;
    @media(max-width: 425px){
    width: 3rem;
    height: 2rem;
    font-size:1.5rem;
}
`