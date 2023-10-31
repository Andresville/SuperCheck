import { StyledBrand, LogoBrand, TitleBrand, NavBarUl, NavBarLi, NavBarA } from "../UI/DesingNav";
import Carrito from "../../assets/imagen/Carrito.svg"
import { CartWidget } from "./CartWidget";




export const NavBar = () => {
    
    const btnNavBar ={
        categories: [
            {
                name: "Almacén",
                id: "1",
                href: "https://es.wikipedia.org/wiki/Almac%C3%A9n"
            },
            {
                name: "Limpieza y Perfumería",
                id: "2",
                href: "https://es.wikipedia.org/wiki/Perfume"
            },
            {
                name: "Frescos",
                id: "3",
                href: "https://es.wikipedia.org/wiki/Fresco"
            },
            {
                name: "Congelados",
                id: "4",
                href: "https://es.wikipedia.org/wiki/Congelados"
            }
        ]
    };
    
   

    return (
        <nav>
            <StyledBrand>
                <LogoBrand src={Carrito} alt="Logo SuperCheck" />
                <TitleBrand>SuperCheck</TitleBrand>
                <CartWidget />
            </StyledBrand>
            <NavBarUl>
                <NavBarLi>{
                    btnNavBar.categories.map((categories) => {
                        return <NavBarA key={categories.id} href={categories.href} target="_black">{categories.name}</NavBarA>
                    })
                }
                </NavBarLi>
            </NavBarUl>

        </nav>
    );
};

