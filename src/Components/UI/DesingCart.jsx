import styled from "styled-components";
import { firstColor, fourthColor } from "./Variables";

export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2% 20%;
    width: 60%;
    background-color: ${firstColor};
    @media(max-width: 425px){
    width: 90%;
    margin: 0 5%;
}
`

export const StyleCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @media(max-width: 425px){
    margin-bottom: 1rem;
}
`

export const TitleCart = styled.h2`
    margin: 5vh 0;
    font-size: 3rem;
    color: ${ fourthColor};
    text-align: center;
    @media(max-width: 425px){
    font-size: 1.5rem;
    margin: 2vh 0;
}
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
@media(max-width: 425px){
    flex-direction: column;
span{
    line-height: 1rem;
    font-size: 1rem;
    width: 60vw;
    padding: 0.2rem;
}
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
@media(max-width: 425px){
    width: 3rem;
    height: 3rem;
}
`

export const StyleIcon = styled.img`
  height: 30px;
  width: 30px;
  background-color: ${firstColor};
  color: red;
  cursor: pointer;
  @media(max-width: 425px){
    width: 1.5rem;
    height: 1.5rem;
}
`