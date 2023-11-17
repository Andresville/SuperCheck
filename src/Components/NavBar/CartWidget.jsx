import { StyleCartWidget, Cart, Span } from "../index"
import CarritoIcono from "../../assets/imagen/CarritoIcono.svg"
import { Link } from "react-router-dom"


export const CartWidget = () => {
  return (
    <StyleCartWidget>
      <Link to="/cart">
        <Cart src={CarritoIcono} alt="Carrito de Compras" />
        <Span>(0)</Span>
      </Link>
    </StyleCartWidget>
  )
}
