import { Link } from "react-router-dom"
import CarritoIcono from "../../assets/imagen/CarritoIcono.svg"
import { Span, StyleCartIcon, StyleCartWidget } from "../index"
import { CartContext } from "../../Context/Context"
import { useContext } from "react"


export const CartWidget = () => {

  const { cartListItems, deleteProduct } = useContext(CartContext);

  return (
    <StyleCartWidget>
      <Link to="/cart">
        <StyleCartIcon src={CarritoIcono} alt="Carrito de Compras" />
        <Span>({cartListItems.length})</Span>
      </Link>
    </StyleCartWidget>
  )
}
