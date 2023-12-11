import { Container, NotFound, Title, TitleItem } from "../index";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { seedProducts } from "../../Utils/SeedProducts";

export const ItemListContainer = () => {

  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
 
 
  const getProductsDB = (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      if (resp.size === 0) {
        setNotFound(true);
      }
      const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
      setIsLoading(false);
    });
  };


  useEffect(() => {
    setIsLoading(true);
    setNotFound(false);
    getProductsDB(category)
  
    //seedProducts();
  }, [category]);
  
   
  return (
    <>
    {notFound ? <NotFound/> :
    <>
    <Title>Nuestros Productos</Title>
    <Container>
      {isLoading ? <TitleItem> Cargando productos... </TitleItem> : 
        products.map(product => (
          <ItemList key={product.id} {...product} />
      ))
      }
    </Container>
    </>
    }
    </>
  );
};
