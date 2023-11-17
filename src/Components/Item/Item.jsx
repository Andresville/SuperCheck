import { ItemCount } from "../ItemCount/ItemCount";
import { ButtonItem, Info, StyleItem } from "../UI/DesingItem";


export const Item = ({ urlImage, name, category, price, description, stock }) => {
  return (
    <>
    <StyleItem>
    <img src={urlImage} width={300} height={300}/>
          <Info>
          <h3>{name}</h3>
          <span>Stock: {stock}</span>
          <span>Categoría: {category}</span>
          <span>{description}</span>
          <span>{price}</span>
          </Info>
          <div>
          <ItemCount stock = {stock} initial={0}/>
          <ButtonItem>Agregar al Carrito</ButtonItem>
          </div>
    </StyleItem>      
    </>
  )
  
};
