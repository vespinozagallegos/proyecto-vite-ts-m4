// vendors
import React from "react";

// types
import { IItemListProps } from "./types";

//? DECLARACIÓN 2 Del componente funcional
// Se declara la función exportada (export function ItemList)
// Se declara el tipo de dato que recibe <Item>
// Se declara el argumento en los params ()
// que serán las props DESESTRUCTURADAS de la interfaz, tipándolas.
// Se desestructuran para mapearlas en la etiqueta ul,
// evitando llamarlas como props.item, props.renderCallback... en caso de que el params() fuese (props: IItemListProps<Item>)
export function ItemList<Item>( {items, renderCallback}: IItemListProps<Item> ) {
    return (
        // en la etiqueta ul se mapean las props
        // recorre cada item y requiere su index
        // retornando una lista donde cada elemento se retona con si index como key
        // ¿Como se renderiza el elemento? le damos la renderCallback con su elemento item dentro
        <>
            <ul>
                {items.map((item, index) => {
                    return <li key={`${index}`}>{renderCallback(item)}</li>
                })}
            </ul>
        </>
    );
}
export default ItemList;




//? DECLARACIÓN 1 
// Se generan muchos Errores con esta declaración. POR LO QUE PASAMOS A LA DECLARACION 2
// Se declara la función de tipo FC que recibe la Interfaz <>
// que requiere un argumento declarado en los params ()
// export const ItemList: React.FC<IItemListProps> = (props: IItemListProps<Item>) => {
//     return (
//         <>

//         </>
//     );
// }

// export default ItemList;