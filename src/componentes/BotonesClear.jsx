import React from "react";
import '../stylesheets/Botones.css';

function BotonesClear(props){
    return(
        <div className="Boton" onClick={props.Clear}>
            {props.children}
        </div>
    )
}

export default BotonesClear;