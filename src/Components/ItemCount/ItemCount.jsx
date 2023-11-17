import { useState } from 'react'
import { Amount, ContBnt, StyleBtnAddSubtract } from '../UI/DesingItem';



export const ItemCount = ({stock, initial}) => {

  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count >= stock){
      return stock;
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === initial) {
      return setCount(initial);
    }
    setCount(count - 1);
  };

    return (
        <>  
          <ContBnt>
            <StyleBtnAddSubtract onClick={increment} >+</StyleBtnAddSubtract>
            <Amount>{count}</Amount>
            <StyleBtnAddSubtract onClick={decrement} >-</StyleBtnAddSubtract>
          </ContBnt>
        </>
    )
}
