import { useContext, useState } from "react";
import { ButtonItem, Info, ItemImage, StyleItem } from "../UI/DesingItem";
import { Link } from "react-router-dom";
import { ItemCount }  from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/Context";



export const Item = ({ urlImage, name, category, price, description, stock, id }) => {

  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);


  const onAdd = () => {
    addProductToCart({ urlImage, name, category, price, description, stock, id, quantity });
  };


  return (
    <>
      <StyleItem>
        <ItemImage $w="17rem" $h="17rem" src={urlImage} />
        <Info>
          <h3>{name}</h3>
          <span>Categoría: {category}</span>
          <span>{description}</span>
          <span>$ {price}</span>
          <span>Stock: {stock }</span>
        </Info>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} updateQuantity={setQuantity} />
        <ButtonItem $shadow="#92c49f" color="#18e74fe2">
          <Link to="/cart">Finalizar compra</Link>
        </ButtonItem>
      </StyleItem>
    </>
  )

};
