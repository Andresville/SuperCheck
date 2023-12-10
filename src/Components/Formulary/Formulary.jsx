import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { ContainerCart } from "../UI/DesingCart";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Context";
import { db } from "../../Config/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";



export const Formulary = () => {
    const { cartListItems, totalCartItems,  deleteAll } = useContext(CartContext)
    
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        mail: ''
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
        if (totalCartItems !== undefined && formValue.name && formValue.phone && formValue.mail) {
            const updatedOrder = { ...order, buyer: formValue, total: totalCartItems, date:serverTimestamp()  };
            setOrder(updatedOrder);
            saveData(updatedOrder);
        } else {
            console.error('Algunos valores son undefined o inválidos.');
            // Puedes manejar el caso en el que los valores no son válidos, por ejemplo, mostrando un mensaje de error al usuario.
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
            text: `${formValue.name} tu compra se realizo de forma exitosa el dia ${newOrder.date}. El total a pagar es de: $ ${newOrder.total}`,
            footer: `ID de la operación: ${orderDoc.id}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        deleteAll()
    };

    console.log(cartListItems)
    console.log(formValue)
    console.log(order)
    console.log(totalCartItems)
    

    /* 
Orden de compra 

collection: "orders"
documents: las ordenes de compra 
document = {
  buyer: { name, phone, email },
  items: {id, name, price, quantity, subTotal},
  date: serverTimestamp();
  total: es el total de la compra
}

*/
    return (
        <>
            <form className='check-form' onSubmit={handleSubmit}>
                <ContainerCart>
                    <TextField
                        id="complete-name"
                        name="name"
                        label="Tu nombre completo"
                        variant="standard"
                        type="text"
                        value={formValue.name}
                        onChange={handleChange}
                        required
                    />
                </ContainerCart>
                <ContainerCart>
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
                </ContainerCart>
                <ContainerCart>
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
                </ContainerCart>
                <Button type="submit" variant="contained" size="medium">Enviar</Button>
            </form >
        
                </>
  )
};