
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
      </div>
    </div>
  );
}

export default App;
