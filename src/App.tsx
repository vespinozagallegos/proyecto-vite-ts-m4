import './App.css'
import Saludador from './ReactFC'

function App() {

  return (
    // Se retorna el componente con la props definida
    <>
      <Saludador name="Víctor">
        <p>
          Aquí iría el componente hijo
        </p>
      </Saludador>
    </>
  )
}

export default App
