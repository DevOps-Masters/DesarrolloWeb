import React, {useState} from "react";
import '../styles/styleInicio.css'
import Cliente from "./cliente";
import Admin from "./administrador";

const Inicio = () => {

    
    let init = <div class="my-15 text-align text-center nx-auto">
                    <h1> Tienda DevOpsMasters </h1>              
                    <img className="imgInicio"src="https://educacion30.b-cdn.net/wp-content/uploads/2021/09/apps-organizarse-978x652.jpg"></img>
                    <br></br>
                    <br></br>
                    <button onClick={vistaCliente} className="buttonInicio"> Cliente </button>
                    <button onClick={vistaAdmin} className="buttonInicio"> Adminitrador </button>
                    
                </div>

    let [estado, setEstado] = useState(init)
    
    function vistaCliente(){
       setEstado(estado = <Cliente />)       
    }
    function vistaAdmin(){
        setEstado(estado = <Admin/>)  
    }    

    return(
        <div>
            {estado}
        </div>        
    )
}

export default Inicio