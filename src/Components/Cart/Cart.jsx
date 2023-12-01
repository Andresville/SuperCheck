import { useContext } from "react";
import { ButtonItem, Info } from "../UI/DesingItem";
import { CartContext } from "../../Context/Context";
import { CartImage, ContainerCart, InfoCart, StyleCart, StyleIcon, TitleCart } from "../UI/DesingCart";
import eliminar from "../../assets/imagen/eliminar.svg"

export const Cart = () => {

  const { cartListItems, setCartListItems, totalPrice, setTotalPrice, deleteProduct } = useContext(CartContext)

  const deleteAll = () => {
    setCartListItems([]);
    setTotalPrice(0);

  };


  return (
    <>
      <ButtonItem color="red" $marginleft="80%"  $shadow="#ecb3b3" onClick={deleteAll}>Vaciar Carrito</ButtonItem>
      <ContainerCart>
      <TitleCart>Mi Carrito: ${totalPrice}</TitleCart>
      {cartListItems.map((product) => {
        const { urlImage, price, description, id, quantity } = product
        return (
          <StyleCart key={id}>
            <CartImage src={urlImage} />
            <InfoCart>
              <span>{description}</span>
              <span>$ {price}</span>
              <span>Cantidad:{quantity}</span>
              <h3>SubTotal: $ {price*quantity} </h3>
            </InfoCart>
            <StyleIcon type="button" src={eliminar} alt="Eliminar" onClick={() => deleteProduct(product)}/>
          </StyleCart>
        
        )
      })}
      </ContainerCart>

    </>
  )
}
