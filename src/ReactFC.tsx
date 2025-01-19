import React from "react";

// Función A
// el tipado de funcion React.FC indica React.FuncionalComponent
//! el tipado del retorno no es 100% necesario
// pero igual se hace como React.ReactElement, limitando a devolver sólo etiquetas HTML.
// dejando fuera tipos de datos: null / number / string ... etc

// export const FirstComponent: React.FC = (): React.ReactElement => {
//     return (
//         <h1>
//             Primera forma de declaración de "MI PRIMER COMPONENTE"
//         </h1>
//     )
// }

// export default FirstComponent;

//? Se comenta la PRIMERA FUNCIÓN porque
//? Error: Un módulo no puede tener varias exportaciones predeterminadas

// Función B
// tipado de props. Se define un GENÉRICO <> con un objeto que hace referencia a la props recibida
// Se declara el componente HIJO dentro del genérico
export const Saludador: React.FC<{name: string, children: React.ReactElement}> = ({ name, children }): React.ReactElement => {
    return (
        <>
            <h1>¡Hola, {name}! </h1>
            {children}
        </>
    )
}

export default Saludador;