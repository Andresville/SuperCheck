import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item, TitleItem } from "../index";
import { db } from "../../Config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";


export const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  

  const { id } = useParams();
  
  const getProductById = (id) => { 
    const productRef = doc( db, "products", id );
     getDoc(productRef)
       .then( resp => {
         // Verificar si el producto existe
         if( resp.exists()) {
           const prod = {
             id: resp.id,
             ...resp.data()
           }
           setItem(prod);
           setIsLoading(false);
         }
       })    
}

  useEffect(() => {
    setIsLoading(true);
    getProductById(id);

  }, [])


  return (
    <>
      {isLoading ? <TitleItem> Cargando productos... </TitleItem> :
        <Item {...item} />
        
      }
      
    </>
  )
}
