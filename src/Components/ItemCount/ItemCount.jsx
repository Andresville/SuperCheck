import { useState } from 'react'
import { Amount, ButtonItem, ContBnt, StyleBtnAddSubtract } from '../UI/DesingItem';


export const ItemCount = ({stock, initial, onAdd, updateQuantity}) => {

  const [count, setCount] = useState(initial);

  const addItem = () => {
    if (count < stock) {
        setCount(count + 1)
        updateQuantity(count + 1)
      }
    };

    const removeItem = () => {
      if (count > initial) {
          setCount(count - 1)
          updateQuantity(count -1)
      }
  };

    return (
        <>  
          <ContBnt>
          <StyleBtnAddSubtract onClick={removeItem} >-</StyleBtnAddSubtract>
            <Amount>{count}</Amount>
            <StyleBtnAddSubtract onClick={addItem} >+</StyleBtnAddSubtract>
          </ContBnt>
          <ButtonItem $shadow="#6b9969" onClick={onAdd}>Agregar al Carrito</ButtonItem>
        </>
    )
};
