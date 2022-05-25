
import './App.css';
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from 'react';


function App() {

const [ numclicks, setnumclicks ] = useState(0);

const botonClick = () => {
  setnumclicks(numclicks + 1);
}

const botonReinicio = () => {
  setnumclicks(0);
}
const botonDeADos = () => {
  setnumclicks(numclicks + 1);
}


  return (
    <div className="App">
      <div className='contenedorGeneral'>
        <Contador 
        numclicks = {numclicks}
        />
        <Boton 
        nombre= "click"
        esbotonClick={true}
        funcionClick= {botonClick}
        />
        <Boton  
        nombre= "reinicio"
        esbotonClick={false}
        funcionClick= {botonReinicio}
        />
        <Boton 
        nombre="suma de a 2"
        esbotonClick={false}
        funcionClick={botonDeADos}
        />
      </div>
    </div>
  );
}

export default App;
