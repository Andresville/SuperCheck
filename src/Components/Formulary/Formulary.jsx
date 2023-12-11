import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Context";
import { db } from "../../Config/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import { Title } from "../UI/DesingItemList";
import { ButtonItem, StyleItem } from "../UI/DesingItem";



export const Formulary = () => {
    const { cartListItems, totalCartItems,  deleteAll } = useContext(CartContext)
    
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        mail: '',
        mail1: ''
    });
    
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map(item => {
            return {
                id: item.id,
                description: item.description,
                price: item.price,
                quantity: item.quantity,  
            }
        }),
        total: 0,
        date: serverTimestamp()
    });
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Verificar si los valores son válidos antes de actualizar el estado y guardar los datos
        if (totalCartItems !== undefined && formValue.name && formValue.phone && formValue.mail && formValue.mail===formValue.mail1) {
            const updatedOrder = { ...order, buyer: formValue, total: totalCartItems, date:serverTimestamp()  };
            setOrder(updatedOrder);
            saveData(updatedOrder);
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Los datos ingresados no son correctos',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
    };
    
    

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
        
    };

    const saveData = async (newOrder) =>{
        const orderFirebase = collection(db, 'orders');
        const orderDoc = await addDoc(orderFirebase, newOrder);

        Swal.fire({
            title: 'Compra confirmada',
            text: `${formValue.name} tu compra se realizo de forma exitosa. El total de tu compra es de: $ ${newOrder.total}`,
            footer: `ID de la operación: ${orderDoc.id}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        deleteAll()
    };

    
    return (
        <>  
            <Title>Datos de Envío</Title>
            <main>
            <form onSubmit={handleSubmit}>
                <StyleItem $wStyleItem="30vw" $hStyleItem="60vh">
                    <TextField 
                        id="complete-name"
                        name="name"
                        label="Nombre Completo"
                        variant="standard"
                        type="text"
                        value={formValue.name}
                        onChange={handleChange}
                        required
                    />
                <TextField
                    id="phone"
                    name="phone"
                    label="Teléfono"
                    variant="standard"
                    type="number"
                    value={formValue.phone}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="email"
                    name="mail"
                    label="Email"
                    variant="standard"
                    type="email"
                    value={formValue.mail}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="email1"
                    name="mail1"
                    label="Confirme su Email"
                    variant="standard"
                    type="email"
                    value={formValue.mail1}
                    onChange={handleChange}
                    required
                />
                <ButtonItem color="#055b70" $marginleft="45%"  $shadow="#0e8da3" type="submit">Enviar</ButtonItem>
                </StyleItem>
            </form >
            </main>
        
                </>
  )
};