import { createContext, useEffect, useState } from "react";


export const CartContext = createContext(null);

export const CartContextProvider = ( { children } ) => {

  const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addProductToCart = (item) => {
    const { urlImage, price, description, id, quantity } = item;
    // Buscamos la posición indice del producto dentro del carrito
    const index = cartListItems.findIndex((product) => product.id === id);

    if (index !== -1) {
      // Si el resulta de index no es -1
      // Hacemos una copia del state
      const cartListItemsCopy = [...cartListItems];
      // Modificamos la cantidad del producto aumentando el valor con la cantidad recibida
      cartListItemsCopy[index].quantity += quantity;
      // Modificamos el subtotal con la nueva cantidad
      cartListItemsCopy[index].subTotal = cartListItemsCopy[index].quantity * cartListItemsCopy[index].price;
      // Reemplazamos el state original con la copia
      setCartListItems(cartListItemsCopy);
      setTotalQuantity(totalQuantity + quantity);
    } else {
      const newItem = {
        id,
        description,
        urlImage,
        price,
        quantity,
        subTotal: quantity * price,
      };

      setCartListItems([...cartListItems, newItem]);
    }

    
  };

  const deleteProduct = (id) => { 
        const arrayFilter = cartListItems.filter( item => item.id !== id );
        setCartListItems(arrayFilter);
        
   };

   const deleteAll = () => { 
      setCartListItems([]);
      
    };

    const handleTotal = () => {
        const total = cartListItems.reduce( (acum, item) => acum + item.subTotal, 0 );
        setTotalCartItems(total);
    }

    const handleTotalQuantity = () => { 
        const total = cartListItems.reduce( (acum, item) => acum + item.quantity, 0);
        setTotalQuantity(total);
     }

    useEffect( () => { 
            handleTotal();
            handleTotalQuantity();
            localStorage.setItem("items", JSON.stringify(cartListItems));
     }, [cartListItems] )

  const objetValue = {
    cartListItems,
    totalCartItems,
    totalQuantity,
    addProductToCart,
    deleteProduct,
    deleteAll
  };

    return (
        <CartContext.Provider value={objetValue}>{children}</CartContext.Provider>
    )
};

