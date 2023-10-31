import { StyleCartWidget, Cart, Span } from "../UI/DesingNav"
import cart  from "../../assets/imagen/cart.svg"

export const CartWidget = () => {
  return (
    <StyleCartWidget>
        <Cart src={cart} alt="Carrito de Compras" />
        <Span>(0)</Span>
    </StyleCartWidget>
  )
}
