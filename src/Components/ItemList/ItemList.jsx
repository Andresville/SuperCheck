import { Link } from "react-router-dom"
import { Button, Info, ItemListImage, StyleItemList } from "../UI/DesingItemList"


export const ItemList = ({ id, urlImage, name, category}) => {
  
  return (
    <StyleItemList>
    <ItemListImage $w="6rem" $h="6rem"  src={urlImage} />
          <Info>
          <h3>{name}</h3>
          <span>Categoría: {category}</span>
          </Info>
          <Link to={`/item/${id}`} key={id}>
          <Button>
            Detalle
          </Button>
          </Link>
        </StyleItemList>      
  )
}
