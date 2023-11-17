import { Link } from "react-router-dom"
import CarritoIcono from "../../assets/imagen/CarritoIcono.svg"
import { Span, StyleCart, StyleCartWidget } from "../index"


export const CartWidget = () => {
  return (
    <StyleCartWidget>
      <Link to="/cart">
        <StyleCart src={CarritoIcono} alt="Carrito de Compras" />
        <Span>(0)</Span>
      </Link>
    </StyleCartWidget>
  )
}
