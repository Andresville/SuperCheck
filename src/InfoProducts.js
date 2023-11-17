const products = 
    [
      {
        id: "1",
        name: "Pure de Tomate",
        category: "Almacen",
        price: "$ 350,00",
        stock: 10,
        description: "Pure de tomate Arcor por 520gr",
        urlImage: "/src/assets/imagen/Arcor-pure-de-tomate.svg"
        
      },
      {
        id: "2",
        name: "Lavandina",
        category: "Limpieza y Perfumeria",
        price: "$ 300,00",
        stock: 6,
        description: "Lavandina Ayudin por 1 litro",
        urlImage:"../src/assets/imagen/Ayudin-lavandina.svg"
      },
      {
        id: "3",
        name: "Leche Descremada",
        category: "Frescos",
        price: "$ 180,00",
        stock: 11,
        description: "Leche La Serenisima por 1 litro",
        urlImage:"../src/assets/imagen/La Serenisima Leche.svg"
      },
      {
        id: "4",
        name: "Papas Fritas",
        category: "Congelados",
        price: "$ 780,00",
        stock: 8,
        description: "Papas fritas McCain, por 500gr",
        urlImage:"../src/assets/imagen/McCain Papas fritas.svg"
      },
      {
        id: "5",
        name: "Pure de Tomate",
        category: "Almacen",
        price: "$ 320,00",
        stock: 8,
        description: "Pure de tomate La Campagnola por 520gr",
        urlImage:"../src/assets/imagen/La-campagnola-pure-de-tomate.svg"
      },
      {
        id: "6",
        name: "Lavandina",
        category: "Limpieza y Perfumeria",
        price: "$ 330,00",
        stock: 6,
        description: "Lavandina Querubin por 1 litro",
        urlImage:"../src/assets/imagen/Querubin-lavandina.svg",
        oferta: "Oferta"
      },
      {
        id: "7",
        name: "Leche Entera",
        category: "Frescos",
        price: "$ 200,00",
        stock: 11,
        description: "Leche Parmalat por 1 litro",
        urlImage:"../src/assets/imagen/Parmalat Leche.svg",
        oferta: "Oferta"
      },
      {
        id: "8",
        name: "Papas Fritas",
        category: "Congelados",
        price: "$ 700,00",
        stock: 8,
        description: "Papas fritas Montina, por 500gr",
        urlImage:"../src/assets/imagen/Montina Papas fritas.svg"
      },
      {
        id: "9",
        name: "Hamburguesas",
        category: "Congelados",
        price: "$ 1050,00",
        stock: 8,
        description: "Hamburguesas Paladini por 4 unidades",
        urlImage:"../src/assets/imagen/Hamburguesas Paladini.svg",
        oferta: "Oferta"
      },
      {
        id: "10",
        name: "Queso Untable",
        category: "Frescos",
        price: "$ 540,00",
        stock: 11,
        description: "Queso untable Tholem por 460gr",
        urlImage:"../src/assets/imagen/Tholem untable.svg",
        oferta: "Oferta"
      },
      {
        id: "11",
        name: "Arroz",
        category: "Almacen",
        price: "$ 420,00",
        stock: 8,
        description: "Arroz Gallo doble carolina por 500gr",
        urlImage:"../src/assets/imagen/Gallo-arroz.svg"
      },
      {
        id: "12",
        name: "Shampoo",
        category: "Limpieza y Perfumeria",
        price: "$ 730,00",
        stock: 6,
        description: "Shampoo Dove por xxxml ",
        urlImage:"../src/assets/imagen/Dove Shampoo.svg",
        oferta: "Oferta"
      },
      {
        id: "13",
        name: "Queso Untable",
        category: "Frescos",
        price: "$ 530,00",
        stock: 11,
        description: "Queso untable Tonadita por 460gr",
        urlImage:"../src/assets/imagen/Tonadita untable.svg"
      },
      {
        id: "14",
        name: "Hamburguesas",
        category: "Congelados",
        price: "$ 1150,00",
        stock: 8,
        description: "Hamburguesas Paty por 4 unidades",
        urlImage:"../src/assets/imagen/Hamburguesas Paty.svg",
        oferta: "Oferta"
      },
      {
        id: "15",
        name: "Shampoo",
        category: "Limpieza y Perfumeria",
        price: "$ 780,00",
        stock: 6,
        description: "Shampoo Johnsons por xxxml ",
        urlImage:"../src/assets/imagen/Johnsons Shampoo.svg"
      },
      {
        id: "16",
        name: "Arroz",
        category: "Almacen",
        price: "$ 470,00",
        stock: 8,
        description: "Arroz Lucchetti por 500gr",
        urlImage:"../src/assets/imagen/Lucchetti-arroz.svg"
      },
      {
        id: "17",
        name: "Fideos",
        category: "Almacen",
        price: "$ 320,00",
        stock: 8,
        description: "Fideos Lucchetti por 500gr",
        urlImage:"../src/assets/imagen/Luchetti-fideos.svg",
        oferta: "Oferta"
      },
      {
        id: "18",
        name: "Jabon Liquido",
        category: "Limpieza y Perfumeria",
        price: "$ 680,00",
        stock: 6,
        description: "Jabon liquido SPA por xxxml ",
        urlImage:"../src/assets/imagen/SPA Jabon.svg"
      },
      {
        id: "19",
        name: "Fideos",
        category: "Almacen",
        price: "$ 350,00",
        stock: 8,
        description: "Fideos Marolio por 500gr",
        urlImage:"../src/assets/imagen/Marolio-fideos.svg"
      },
      {
        id: "20",
        name: "Jabon Liquido",
        category: "Limpieza y Perfumeria",
        price: "$ 620,00",
        stock: 6,
        description: "Jabon liquido Palmolive por xxxml ",
        urlImage:"../src/assets/imagen/Palmolive Jabon.svg"
      },
      {
        id: "21",
        name: "Milanesas de Soja",
        category: "Congelados",
        price: "$ 850,00",
        stock: 8,
        description: "Milanesas de soja La Anonima por 4 unidades",
        urlImage:"../src/assets/imagen/La Anonima Milanesa de soja.svg"
      },
      {
        id: "22",
        name: "Manteca",
        category: "Frescos",
        price: "$ 230,00",
        stock: 11,
        description: "Manteca La Paulina por xxxgr",
        urlImage:"../src/assets/imagen/La Paulina Manteca.svg"
      },
      {
        id: "23",
        name: "Manteca",
        category: "Frescos",
        price: "$ 270,00",
        stock: 11,
        description: "Manteca Tonadita por xxxgr",
        urlImage:"../src/assets/imagen/Tonadita manteca.svg"
      },
      {
        id: "24",
        name: "Milanesas de Soja",
        category: "Congelados",
        price: "$ 890,00",
        stock: 8,
        description: "Milanesas de soja Swift por 4 unidades",
        urlImage:"../src/assets/imagen/Swift Milanesa de soja.svg"
      },
    ];


    export const getProducts = () => { 

      return new Promise( (resolve, reject) => { 
          if(products.length > 0) {
              setTimeout ( () => { 
                   resolve( products )   
               }, 2000);
          } else {
              reject("No hay productos disponibles");
          };
      } );
   };

   export const getProductById = (id) => {

    return new Promise((resolve, reject) => { 
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };
