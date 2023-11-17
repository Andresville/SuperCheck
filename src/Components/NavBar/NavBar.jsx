import { StyledBrand, LogoBrand, TitleBrand, NavBarUl, NavBarLi, NavBarP, CartWidget } from "../index";
import Logo from "../../assets/imagen/Logo.svg"
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    
    const btnNavBar ={
        categories: [
            {
                name: "Home",
                id: "1",
                nameRoute: "",
            },
            {
                name: "Limpieza y Perfumería",
                id: "2",
                nameRoute: "Limpieza y Perfumeria",
            },
            {
                name: "Frescos",
                id: "3",
                nameRoute: "Frescos",
            },
            {
                name: "Congelados",
                id: "4",
                nameRoute: "Congelados",
            },
            {
                name: "Almacén",
                id: "5",
                nameRoute: "Almacen",
            }
        ]
    };
    
   

    return (
        <nav>
            <StyledBrand>
                <LogoBrand src={Logo} alt="Logo SuperCheck" />
                <TitleBrand>SuperCheck</TitleBrand>
                <CartWidget />
            </StyledBrand>
            <NavBarUl>
                <NavBarLi>{
                    btnNavBar.categories.map((categories) => {
                        return ( categories.nameRoute === "" ? 
                        <NavLink to={`${categories.nameRoute}`}  key={categories.id}>
                        <NavBarP>{categories.name}</NavBarP>
                        </NavLink> :
                        <NavLink to={`/category/${categories.nameRoute}`}  key={categories.id}>
                        <NavBarP>{categories.name}</NavBarP>
                        </NavLink>
                        )
                    })
                }
                </NavBarLi>
            </NavBarUl>

        </nav>
    );
};

