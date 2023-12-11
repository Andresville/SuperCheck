import styled from "styled-components";
import { fifthColor, firstColor, fourthColor } from "./Variables";

export const Title = styled.h2`
    margin-top: 2vh;
    margin-left: 15vw;
    font-size: 3rem;
    color: ${fifthColor};
    text-align: left;
    @media(max-width: 425px){
    color: ${fourthColor};
    font-size: 1rem;
    margin-left: 5vh;
  }
  `

export const Button = styled.button`
    background-color: ${fourthColor};
    width: 8vw;
    height: 3vh;
    border-radius: 20px;
    color: ${firstColor};
    cursor: pointer;
    @media(max-width: 425px){
    font-size:.5rem;
    width: 15vw;
    margin-bottom: .5vw;
}

`

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    flex-wrap: wrap;

`

export const StyleItemList = styled.div`
    width: 25vw;
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
    @media(max-width: 425px){
    width: 35vw;
    height: 20vh;
  }
`

export const ItemListImage = styled.img`
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
    width: 3rem;
    height: 3rem;
}

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-weight: 300;
        line-height: 1.3rem;
    }
`

