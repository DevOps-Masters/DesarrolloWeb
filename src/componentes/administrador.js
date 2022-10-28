import React, { useState } from "react";
import '../styles/styleAdminstrador.css'
import Inicio from "./inicio";
import datos from '../listaProductos.json';
import ventas from '../listaVentas.json';


function Admin(){
    const volver = () => { 
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setListaProductos(listaProductos=[])
        setModificar(modificar="")
        setListaVentas(listaVentas=[])
    }

    function inicializacion(){
        setInicio(inicio=imagen)
        setListaProductos(listaProductos=[])
        setModificar(modificar="")
        setListaVentas(listaVentas=[])
    }

    function visualizacionProd () {
        setInicio(inicio="")
        setListaProductos(listaProductos=datos)
        setModificar(modificar="")
        setListaVentas(listaVentas=[])
    }
    function visualizacionVent () {
        setInicio(inicio="")
        setListaProductos(listaProductos=[])
        setModificar(modificar="")
        setListaVentas(listaVentas=ventas)
    }


    function modificacion () {
        let mod = 
        <div className="form">
            <form >
                
           /* {listaProductos.map( (elem, idx) => {
                return(
                    <div className="objetos" key={elem.id}>                        
                       <strong>Producto {idx+1} :{<br></br>}  </strong> Referencia: {elem.id} {<br></br>} Nombre: {elem.nombre} {<br></br>}  Descripcion: {elem.descripcion} {<br></br>} Precio: {elem.precio} {<br></br>} Stock: {elem.stock} {<br></br>} imagen: {<img className="imagenLista" src={elem.imagen}></img>} 
              </div>  )})}*/

            <div class="mb-2"><label> Nombre </label> <input type="text"></input></div>
            <div class="mb-2"><label> Descripcion </label> <input type="text"></input></div>
            <div class="mb-2"><label> Precio </label> <input type="number"></input></div>
            <div class="mb-2"><label> Stock </label> <input type="number"></input></div>
            <div class="mb-2" ><button class=" btn btn-primary " type="submit"> Guardar </button></div>
            </form>
        </div>
        setModificar(modificar=mod)
        setInicio(inicio="")
        setListaProductos(listaProductos=[])
        setListaVentas(listaVentas=[])
    }

    let init = <div className="blockAdmin">
                    <button onClick={inicializacion} className="buttonAdmin"> Inicio </button>
                    <button onClick={visualizacionProd} className="buttonAdmin"> Lista Productos </button>
                    <button onClick={modificacion} className="buttonAdmin"> Modificar productos </button>
                    <button onClick={visualizacionVent} className="buttonAdmin"> Lista Ventas </button>
                    <button onClick={volver} className="buttonAdmin"> Volver </button>
                </div>
    let imagen = <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/07/apps-android-2392893.jpg"></img>
    
    let [barra, setBarra] = useState(init)    
    let [inicio, setInicio] = useState(imagen)
    let [listaProductos, setListaProductos] = useState([])
    let [modificar, setModificar] = useState("")
    let [listaVentas, setListaVentas] = useState([])

    return(
        <div >
            {barra} 
            {inicio}  
            {listaProductos.map( (elem, idx) => {
                return(
                    <div className="objetos" key={elem.id}>                        
                       <strong>Producto {idx+1} :{<br></br>}  </strong> Referencia: {elem.id} {<br></br>} Nombre: {elem.nombre} {<br></br>}  Descripcion: {elem.descripcion} {<br></br>} Precio: {elem.precio} {<br></br>} Stock: {elem.stock} {<br></br>} imagen: {<img className="imagenLista" src={elem.imagen}></img>} 
                    </div>
                )
            })} 
            {modificar}
            {listaVentas.map( (elem1, idx1) => {
                return(
                    <div className="objetos" key={elem1.id}>                        
                                          
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">idVenta</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{elem1.Id}</th>
                            <td>{elem1.Fecha}</td>
                            <td>{elem1.Valor}</td>
                            </tr>
                            
                        </tbody>
                        </table> 
                    
                    </div>
                )
            })}   
      
        </div>
    )

}
export default Admin