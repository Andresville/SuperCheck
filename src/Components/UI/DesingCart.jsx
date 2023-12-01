import styled from "styled-components";
import { firstColor, fourthColor } from "./Variables";

export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2% 20%;
    width: 60%;
    background-color: ${firstColor};
`

export const StyleCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

export const TitleCart = styled.h2`
    margin: 5vh 0;
    font-size: 3rem;
    color: ${ fourthColor};
    text-align: center;
  `

export const InfoCart = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
span{
    margin: auto;
    font-weight: 300;
    line-height: 1.5rem;
    width: 10vw;
    padding: .5rem;
    text-align:center;
}
h3{
    margin: auto;
}
`

export const CartImage = styled.img`
    width: 5rem;
    height: 5rem;
    transition: 300ms;
    cursor: zoom-in;
    margin: .5rem 0;
&:hover{
    transform: scale(2);
    border-radius: 10%;
    box-shadow: 0 1rem .8rem #070707;
}
`

export const StyleIcon = styled.img`
  height: 30px;
  width: 30px;
  background-color: ${firstColor};
  color: red;
  cursor: pointer;
`