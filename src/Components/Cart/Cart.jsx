import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonItem, Info } from "../UI/DesingItem";
import { CartContext } from "../../Context/Context";
import { CartImage, ContainerCart, InfoCart, StyleCart, StyleIcon, TitleCart } from "../UI/DesingCart";
import eliminar from "../../assets/imagen/eliminar.svg"

export const Cart = () => {

  const { cartListItems, totalCartItems, deleteProduct, deleteAll } = useContext(CartContext);
  
  return (
    <>
      <ButtonItem color="red" $marginleft="10%"  $shadow="#ecb3b3" onClick={deleteAll}>Vaciar Carrito</ButtonItem>
      <ButtonItem color="#18e74fe2" $marginleft="60%"  $shadow="#92c49f">
      <Link to="/form">Finalizar compra</Link>
      </ButtonItem>
      <ContainerCart>
      <TitleCart>Mi Carrito: ${totalCartItems}</TitleCart>
      {cartListItems.map((item) => {
        const { urlImage, price, description, id, quantity, subTotal } = item;
        return (
          <StyleCart key={id}>
            <CartImage src={urlImage} />
            <InfoCart>
              <span>{description}</span>
              <span>$ {price}</span>
              <span>Cantidad:{quantity}</span>
              <h3>SubTotal: $ {subTotal} </h3>
            </InfoCart>
            <StyleIcon type="button" src={eliminar} alt="Eliminar" onClick={() => deleteProduct(id)}/>
          </StyleCart>
        
        );
      })};
      </ContainerCart>

    </>
  );
};