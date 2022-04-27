import React from "react";
import "../estilos/hojaestilos.css"

function Boton ({nombre, esbotonClick, funcionClick}){
    return(
        <button className={esbotonClick ? "boton-Click" : "Boton-Reinicio"}
        onClick = {funcionClick}>
        {nombre}
       </button>
    );
}

export default Boton;