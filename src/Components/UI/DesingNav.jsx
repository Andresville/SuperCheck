import styled from "styled-components";
import { firstColor, fourthColor } from "../index";

export const StyledBrand = styled.header`
background-color: ${firstColor};
display: flex;
flex-direction: row;
margin-top: 2vh;
padding: 0 5vw;
height: 10vh;
align-items: center;
@media(max-width: 425px){
    height: 5vh;
  }
`

export const LogoBrand = styled.img`
  height: 3rem;
  width: 3rem;
  background-color: ${firstColor};
  @media(max-width: 425px){
    height: 2rem;
    width: 2rem;
  }
`

export const TitleBrand = styled.h1`
  padding: 0 15vw;
  background-color: ${firstColor};
  color: ${fourthColor};
  font-size: 3rem;
  font-weight: 900;
  font-style: italic;
  @media(max-width: 425px){
    font-size: 1.7rem;
  }
`

export const StyleCartWidget = styled.div`
  background-color: ${firstColor};
  position: absolute;
  right: 7vw;
  padding-top: 4vh;
  @media(max-width: 425px){
    padding-top: 2vh;
  }
`

export const StyleCartIcon = styled.img`
  height: 30px;
  width: 30px;
  background-color: ${firstColor};
  @media(max-width: 425px){
    height: 1.2rem;
    width: 1.2rem;
  }
`

export const Span = styled.span`
  background-color: ${firstColor};
  color: ${fourthColor};
  @media(max-width: 425px){
    font-size: .5rem;
  }
`

export const NavBarUl = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 5vh;
  flex-direction: row;
  list-style-type: none; 
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${fourthColor};
  @media(max-width: 425px){
    height: 3vh;
  }
`

export const NavBarLi = styled.li`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 5vh;
  flex-direction: row;
  list-style-type: none; 
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${fourthColor};
  @media(max-width: 425px){
    height: 2vh;
  }
`

export const NavBarP = styled.p`
  display: inline;
  background-color: ${fourthColor};
  color: ${firstColor};
  text-align: center;
  padding: 1vh;
  text-decoration: none;
  height: 5vh;
  @media(max-width: 425px){
    font-size: .5rem;
  }
`