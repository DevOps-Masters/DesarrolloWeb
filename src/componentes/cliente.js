import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import datos from '../listaProductos.json';
import carrito from '../listaCarrito.json';

function Cliente(){
    const volver = () => { 
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setListaProductos(listaProductos=[])
        
        setListaCarrito(listaCarrito=[])
    }

    function inicializacion(){
        setInicio(inicio=imagen)
        setListaProductos(listaProductos=[])
     
        setListaCarrito(listaCarrito=[])
    }

    function visualizacionProd () {
        setInicio(inicio="")
        setListaProductos(listaProductos=datos)
        
        setListaCarrito(listaCarrito=[])
    }
    function visualizacionVent () {
        setInicio(inicio="")
        setListaProductos(listaProductos=[])
        
        setListaCarrito(listaCarrito=carrito)
    }


    

    let init = <div className="blockCliente">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={visualizacionProd} className="buttonCliente"> Lista Productos </button>
                    
                    <button onClick={visualizacionVent} className="buttonCliente"> Carrito </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/07/apps-android-2392893.jpg"></img>
    
    let [barra, setBarra] = useState(init)    
    let [inicio, setInicio] = useState(imagen)
    let [listaProductos, setListaProductos] = useState([])
    
    let [listaCarrito, setListaCarrito] = useState([])

    return(
        <div >
            {barra} 
            {inicio}  
            {listaProductos.map( (elem, idx) => {
                return(
                    <div className="objetos" key={elem.id}>                        
                       <strong>Producto {idx+1} :{<br></br>}  </strong> Referencia: {elem.id} {<br></br>} Nombre: {elem.nombre} {<br></br>}  Descripcion: {elem.descripcion} {<br></br>} Precio: {elem.precio} {<br></br>} Stock: {elem.stock} {<br></br>} imagen: {<img className="imagenLista" src={elem.imagen}></img>} {<br></br>} {<button class="btn btn-primary" type="button">Comprar</button>}
                    </div>
                )
            })} 
            
            {listaCarrito.map( (elem1, idx1) => 
            
            {
                return(
                    <div>
                    <div className="objetos" key={elem1.id}>                        
                                          
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">IdProducto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{elem1.id}</th>
                            <td>{elem1.nombre}</td>
                            <td>{elem1.descripcion}</td>
                            <td>{elem1.precio}</td>
                            <td>{elem1.stock}</td>
                            <td>{<img className="imagenCarrito" src={elem1.imagen}></img>}</td>
                            </tr>
                            
                        </tbody>
                        </table> 
                        
                    </div>

                    <button  class="mx-5  btn btn-success"    type="button">Finalizar compra</button>

                    <button class=  "btn btn-danger" type="button">Cancelar</button>
                    </div>
                   
                )
                
            }
            
            
            )}   
      
        </div>
        
    )

}
export default Cliente