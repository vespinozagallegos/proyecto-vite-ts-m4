// types
import { IOrder } from "./types"

// Array simulador de ORDENES de COMPRAS
// Se declara const orders tipada como un Array de objetos. Cada objeto basado en la Interfaz
export const orders: IOrder[] = [
    {
        id: '1',
        items: ["manzana", "pan", "verduras"],
        total: 200
    },
    {
        id: '2',
        items: ["camiseta", "zapatos", "mochila"],
        total: 500
    },
]

//! Se genera error por las etiquetas HTML, asi que se debe cambiar la extension ts de utils a utils.tsx
// Función que renderiza los objetos
// recibe por parametro al objeto order basado en la Interfaz
// Renderiza cada orden y pone como lista LOS ELEMENTOS de la ORDEN
export const orderRenderer = (order: IOrder) => {
    return (
        // renderizaciones
        <div>
            <p>{order.id}</p>
            <ul>
                {order.items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
            <p>{order.total}</p>
        </div>
    );
}