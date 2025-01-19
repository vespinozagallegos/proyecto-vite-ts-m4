// vendors o react
import React from "react";

// components
import ItemList from "../ItemList/ItemList";

// types
import { IOrder } from "./types";

// utils
import { orderRenderer, orders } from "./utils";



// Componente Funcional
export const ListUseExample: React.FC = () => {
    return (
        // Se llama ItemList (f GENÉRICA)
        // ?OPCIONAL tipar ItemList<IOrder>
        <>
            <ItemList<IOrder> items={orders} renderCallback={orderRenderer} />
        </>
    );
}

export default ListUseExample;