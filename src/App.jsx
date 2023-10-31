import GlobalStyle from "./GlobalStyle";
import {NavBar} from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
    <GlobalStyle />
    <NavBar />
    <ItemListContainer mensaje="Bienvenidos a Supercheck, una manera nueva de comprar!!!!"/>
    </>
  );
};

export default App
