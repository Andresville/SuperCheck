import { Cart, ItemDetailContainer, ItemListContainer, NavBar } from "../src/Components";
import { CartContextProvider } from "./Context/Context";
import { GlobalStyle } from "./GlobalStyle";

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';





function App() {

  return (
    <CartContextProvider>
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </CartContextProvider>
  );
};

export default App
