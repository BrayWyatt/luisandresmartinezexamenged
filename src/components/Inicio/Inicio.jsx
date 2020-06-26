import React, { Component } from "react";
import { Link } from "react-router-dom";
import  "./Inicio.css";

class Inicio extends Component{
 render(){
   return(
     <div className="container">
       <div className="row">
         <div className="col-12 col-md-12 text-center cajaTitulo">
          <h1 className="titulo">Encuentra cartas iguales</h1>
          <Link className="nav-link entrar" to="/tablero" >Jugar</Link>
         </div>
       </div>
     </div>
   )
 }
}

export default Inicio;