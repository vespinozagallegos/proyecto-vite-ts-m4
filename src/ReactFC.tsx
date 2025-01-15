import React, { Children } from "react";

// // Función A
// // el tipado de funcion React.FC
// // el tipado del retorno React.ReactElement limita a devolver solo etiquetas HTML
// export const FirstComponent: React.FC = (): React.ReactElement => {
//     return (
//         <h1>
//             Primera forma de declaración de "MI PRIMER COMPONENTE"
//         </h1>
//     )
// }

// export default FirstComponent;

// Función B
// tipado de props. Se define un GENÉRICO <> con un objeto que hace referencia a la props recibida
// Se declara el componente HIJO dentro del genérico
export const Saludador: React.FC<{children: React.ReactElement, name: string}> = ({ name, children }): React.ReactElement => {
    return (
        <>
            <h1>¡Hola, {name}! </h1>
            {children}
        </>
    )
}

export default Saludador;