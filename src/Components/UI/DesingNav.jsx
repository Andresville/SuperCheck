import styled from "styled-components";
import{firstColor, fourthColor} from "../index";

export const StyledBrand = styled.header`
background-color: ${firstColor};
display: flex;
flex-direction: row;
margin-top: 2vh;
padding: 0 5vw;
height: 10vh;
align-items: center;
`

export const LogoBrand = styled.img`
  height: 50px;
  width: 50px;
  background-color: ${firstColor};
`

export const TitleBrand = styled.h1`
  padding: 0 15vw;
  background-color: ${firstColor};
  color: ${fourthColor};
  font-size: 3em;
  font-weight: 900;
  font-style: italic;
`

export const StyleCartWidget = styled.div`
  background-color: ${firstColor};
  position: absolute;
  right: 7vw;
  padding-top: 4vh;
`

export const StyleCartIcon = styled.img`
  height: 30px;
  width: 30px;
  background-color: ${firstColor};
`

export const Span= styled.span`
  background-color: ${firstColor};
  color: ${fourthColor};
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

`

export const NavBarP = styled.p`
  display: inline;
  background-color: ${fourthColor};
  color: ${firstColor};
  text-align: center;
  padding: 1vh;
  text-decoration: none;
  height: 5vh;
`