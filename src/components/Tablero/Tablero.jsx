import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Tablero.css";
import CartaDragon from "../CartaDragon/CartaDragon";
import CartaJuez from "../CartaJuez/CartaJuez";
import CartaMago from "../CartaMago/CartaMago";
import CartaImitador from "../CartaImitador/CartaImitador";

class Tablero extends Component {
  constructor(props){
    super(props)
    let cartas= [
        {tipo:"carta dragon", visible: false, hidden:false},
        {tipo:"carta dragon", visible: false, hidden:false},
        {tipo:"carta juez", visible: false, hidden:false},
        {tipo:"carta juez", visible: false, hidden:false},
        {tipo:"carta mago", visible: false, hidden:false},
        {tipo:"carta mago", visible: false, hidden:false},
        {tipo:"carta imitador", visible: false, hidden:false},
        {tipo:"carta imitador", visible: false, hidden:false},
      ]

    cartas = cartas.sort(() => Math.random() - 0.5);
    this.state={
      cartas:cartas,
      juegoTerminado: false,
      puntos: 0,
    }
  }  

  toggle(index){
    let estadoNuevo=this.state.cartas
    estadoNuevo[index].visible = !this.state.cartas[index].visible
    
    this.setState({
      cartas: estadoNuevo,
    })
    setTimeout(this.verificarMatch.bind(this), 2500)
  }
 
  verificarMatch(){ 
    let contador=0
    let contadorHidden=0
    let juegoTerminado=false;
    let carta1=null
    let carta2=null

    let cartas=this.state.cartas /* lo q esta en state lo guardo en variable para no poner todo el rato this.state.cartas*/

    cartas.forEach((carta, index) => {
      if(carta.visible=== true){
        contador+=1
        if(contador===1){
          carta1=index
        }else{carta2= index}
      }      
      if(carta.hidden===true){
        contadorHidden+=1
      }
    });

    if(contador===0){
      return
    }
    if(contador===1){
      return
    }
    if(contador===2){
      if(cartas[carta1].tipo===cartas[carta2].tipo){
        cartas[carta1].hidden=true;
        cartas[carta1].visible=false;
        cartas[carta2].hidden=true;
        cartas[carta2].visible=false;
        this.setState({
          puntos: this.state.puntos+10,
        })
        if(contadorHidden===6){
          juegoTerminado=true
        }
      }else{
        cartas[carta1].visible=false;        
        cartas[carta2].visible=false;
      }
      this.setState({
        cartas:cartas,
        juegoTerminado:juegoTerminado,
      })
    }
  }
  

  pintarCartas(){
    let mostrarCarta= this.state.cartas.map((carta, index)=>{
      if(carta.tipo==="carta dragon"){
        return <CartaDragon hidden={carta.hidden} visible={carta.visible} index={index} toggle={this.toggle.bind(this)} />
      }
      if(carta.tipo==="carta juez"){
        return <CartaJuez hidden={carta.hidden} visible={carta.visible} index={index} toggle={this.toggle.bind(this)} />
      }
      if(carta.tipo==="carta mago"){
        return <CartaMago hidden={carta.hidden} visible={carta.visible} index={index} toggle={this.toggle.bind(this)} />
      }
      if(carta.tipo==="carta imitador"){
        return <CartaImitador hidden={carta.hidden} visible={carta.visible} index={index} toggle={this.toggle.bind(this)} />
      }
    })
    return mostrarCarta;
  }
  pintarResultado(){
      return this.state.puntos;
  }

  render() {
    if(this.state.juegoTerminado===true){
      return(
        <div>
          <div className="container tablero cajaTitulo">
            <div className="row2">
              <h1 className="col-12 text-center titulo">Felicidades</h1>
              <Link className="nav-link entrar col-12 text-center" to="/" >Volver a jugar</Link>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="score">
        {this.pintarResultado()}
        </div>
        <div className="container tablero">

          <div className="row">
            {this.pintarCartas()}

          </div>
        </div>
      </div>
    )
  }
}

export default Tablero;