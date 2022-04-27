import React from "react";
import "../estilos/hojaestilos.css"

function Contador ({numclicks}){
    return (
        <div className="contador">
            {numclicks}
        </div>
    );
}

export default Contador;