import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../InfoProducts";
import { Item, TitleItem } from "../index";


export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    setIsLoading(true);
    getProductById(id)
      .then(resp => {
        setItem(resp)
        setIsLoading(false);
      })
      .catch(error => console.log(error));

  }, [])


  return (
    <>
      {isLoading ? <TitleItem> Cargando productos... </TitleItem> :
        <Item {...item} />
        
      }
      
    </>
  )
}
