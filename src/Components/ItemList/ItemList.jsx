import { Link } from "react-router-dom"
import { Button, Info, StyleItemList } from "../UI/DesingItemList"


export const ItemList = ({ id, urlImage, name, category}) => {
  
  return (
    <StyleItemList>
    <img src={urlImage} width={90} height={120}/>
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
