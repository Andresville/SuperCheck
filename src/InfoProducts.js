const products = 
    [
      {
        id: "1",
        name: "Pure de Tomate",
        category: "Almacen",
        price: 350.00,
        stock: 10,
        description: "Pure de tomate Arcor por 520gr",
        urlImage: "https://www.mayoristanet.com/media/catalog/product/cache/7c7e7e8fca0426f106cb3e3371a80f9c/A/0/A08231_1.JPG",
        
      },
      {
        id: "2",
        name: "Lavandina",
        category: "Limpieza y Perfumeria",
        price: 300.00,
        stock: 6,
        description: "Lavandina Ayudin por 1 litro",
        urlImage:"https://soylola.com/37336-large_default/lavandina-ayudin-clasica-1000cc.jpg"
      },
      {
        id: "3",
        name: "Leche Descremada",
        category: "Frescos",
        price: 180.00,
        stock: 11,
        description: "Leche La Serenisima por 1 litro",
        urlImage:"https://www.supermercadoacuario.com.ar/app/files/company_35/products/65916_7793940491009.jpg"
      },
      {
        id: "4",
        name: "Papas Fritas",
        category: "Congelados",
        price: 780.00,
        stock: 8,
        description: "Papas fritas McCain, por 2.5kg",
        urlImage:"https://www.mayoristanet.com/media/catalog/product/cache/7c7e7e8fca0426f106cb3e3371a80f9c/G/0/G00491_4.jpg"
      },
      {
        id: "5",
        name: "Pure de Tomate",
        category: "Almacen",
        price: 320.00,
        stock: 8,
        description: "Pure de tomate La Campagnola por 520gr",
        urlImage:"https://lacampagnola.com/uploads/products/fc0474b7674df19e71e89f70e7297006.jpg"
      },
      {
        id: "6",
        name: "Lavandina",
        category: "Limpieza y Perfumeria",
        price: 330.00,
        stock: 6,
        description: "Lavandina Querubin por 1 litro",
        urlImage:"https://carrefourar.vtexassets.com/arquivos/ids/188632/7791905000037_02.jpg",
        oferta: "Oferta"
      },
      {
        id: "7",
        name: "Leche Entera",
        category: "Frescos",
        price: 200.00,
        stock: 11,
        description: "Leche Parmalat por 1 litro",
        urlImage:"https://www.realonline.com.py/media/catalog/product/cache/3f15339c1db7f7a94f5f1d1b7cf2eabf/7/8/7840006177008.jpg",
        oferta: "Oferta"
      },
      {
        id: "8",
        name: "Papas Fritas",
        category: "Congelados",
        price: 700.00,
        stock: 8,
        description: "Papas fritas Montina, por 500gr",
        urlImage:"https://www.ariztiaatucasa.cl/media/catalog/product/cache/3aa1df24426dbabd72ab974cf5ed84b3/8/7/87965c_1.jpg"
      },
      {
        id: "9",
        name: "Hamburguesas",
        category: "Congelados",
        price: 1050.00,
        stock: 8,
        description: "Hamburguesas Paladini por 4 unidades",
        urlImage:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3361404_f.jpg",
        oferta: "Oferta"
      },
      {
        id: "10",
        name: "Queso Untable",
        category: "Frescos",
        price: 540.00,
        stock: 11,
        description: "Queso untable Tholem por 190gr",
        urlImage:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3271218_f.jpg",
        oferta: "Oferta"
      },
      {
        id: "11",
        name: "Arroz",
        category: "Almacen",
        price: 420.00,
        stock: 8,
        description: "Arroz Gallo doble carolina por 1kg",
        urlImage:"https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000024000/24850.jpg"
      },
      {
        id: "12",
        name: "Shampoo",
        category: "Limpieza y Perfumeria",
        price: 730.00,
        stock: 6,
        description: "Shampoo Dove por 400gr ",
        urlImage:"https://acdn.mitiendanube.com/stores/001/120/638/products/dove-baby-cabello-rizado-shampoo-x-400ml2-53f935062a8b81e95216432071482209-1024-1024.jpg",
        oferta: "Oferta"
      },
      {
        id: "13",
        name: "Queso Untable",
        category: "Frescos",
        price: 530.00,
        stock: 11,
        description: "Queso untable Tonadita por 190gr",
        urlImage:"https://masonlineprod.vtexassets.com/arquivos/ids/233071/0779806085257-01-22732.jpg"
      },
      {
        id: "14",
        name: "Hamburguesas",
        category: "Congelados",
        price: 1150.00,
        stock: 8,
        description: "Hamburguesas Paty por 4 unidades",
        urlImage:"https://acdn.mitiendanube.com/stores/001/157/846/products/002898101-e6cb2db1c49a75017016329361141187-1024-1024.jpg",
        oferta: "Oferta"
      },
      {
        id: "15",
        name: "Shampoo",
        category: "Limpieza y Perfumeria",
        price: 780.00,
        stock: 6,
        description: "Shampoo Johnsons por 100ml ",
        urlImage:"https://www.levapan.com/wp-content/uploads/2021/08/shampoo-baby-cabello-claro-jj-100-ml.jpg"
      },
      {
        id: "16",
        name: "Arroz",
        category: "Almacen",
        price: 470.00,
        stock: 8,
        description: "Arroz Lucchetti por 1kg",
        urlImage:"https://jumboargentina.vtexassets.com/arquivos/ids/468465/Arroz-Lucchetti-Parboil-1-Kg-1-41424.jpg"
      },
      {
        id: "17",
        name: "Fideos",
        category: "Almacen",
        price: 320.00,
        stock: 8,
        description: "Fideos Lucchetti Moños por 500gr",
        urlImage:"https://www.superacasa.com.ar/1629-large_default/fideos-monos-luchetti-x-500g.jpg",
        oferta: "Oferta"
      },
      {
        id: "18",
        name: "Jabon Liquido",
        category: "Limpieza y Perfumeria",
        price: 680.00,
        stock: 6,
        description: "Jabon liquido SPA por 300cc ",
        urlImage:"https://carrefourar.vtexassets.com/arquivos/ids/228435/7798096053026_02.jpg"
      },
      {
        id: "19",
        name: "Fideos",
        category: "Almacen",
        price: 350.00,
        stock: 8,
        description: "Fideos Marolio Mostachol por 500gr",
        urlImage:"https://arjosimarprod.vteximg.com.br/arquivos/ids/166086-1000-1000/marolio-fideo-mostachol-liso-500gr-1-11877.jpg"
      },
      {
        id: "20",
        name: "Jabon Liquido",
        category: "Limpieza y Perfumeria",
        price: 620.00,
        stock: 6,
        description: "Jabon liquido Palmolive por 250ml ",
        urlImage:"https://cdn.batitienda.com/baticloud/images/product_picture_a96ef75a3e6c4dd8886839ab4d5382c6_637735024423864699_0_m.jpg"
      },
      {
        id: "21",
        name: "Milanesas de Soja",
        category: "Congelados",
        price: 850.00,
        stock: 8,
        description: "Milanesas de soja La Anonima por 4 unidades",
        urlImage:"https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000000000/112.jpg"
      },
      {
        id: "22",
        name: "Manteca",
        category: "Frescos",
        price: 230.00,
        stock: 11,
        description: "Manteca La Paulina por 500gr",
        urlImage:"https://acdn.mitiendanube.com/stores/861/458/products/manteca1-59c5ce6928676c206416838120938589-640-0.jpg"
      },
      {
        id: "23",
        name: "Manteca",
        category: "Frescos",
        price: 270.00,
        stock: 11,
        description: "Dulce de leche Tonadita por 250gr",
        urlImage:"https://d2r9epyceweg5n.cloudfront.net/stores/001/410/113/products/dulce-de-leche-tonadita-250-grs1-9d50f868fb0ab8a50c16378440705490-1024-1024.jpg"
      },
      {
        id: "24",
        name: "Milanesas de Soja",
        category: "Congelados",
        price: 890.00,
        stock: 8,
        description: "Bocaditos de pollo Swift por 380gr",
        urlImage:"https://www.casa-segal.com/wp-content/uploads/2020/03/bocaditos-de-pollo-swift-380-gr-ofertas-casa-segal-supermercado-mendoza.jpg"
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
