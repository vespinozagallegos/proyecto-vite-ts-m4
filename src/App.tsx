import './App.css'
// import Saludador from './ReactFC'
// import Product from './Product'
import ListUseExample from './components/ListUseExample/ListUseExample'

function App() {

  return (
    // Se retorna el componente "Saludador" con la props "name" definida en el componente "ReactFC" como string
    // <Saludador name="Víctor"/>               ----> componente sin children.
    // <Saludador name="Víctor"> </Saludador>   ----> componente CON children.
    // Con children declarado en ReactFC como ReacElement, se debe abrir envuelto en una etiqueta HTML <p> </p>

    // <Product name="Víctor"/>               ----> componente sin children.
    <>
      {/* <Saludador name="Víctor">
        <p>
          Aquí iría el componente hijo
        </p>
      </Saludador> */}

      {/* <Product title='Producto1' description='Descripción del Producto1' price={100} /> */}
      <ListUseExample/>
    </>
  )
}

export default App
