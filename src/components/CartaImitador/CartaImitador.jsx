import React, { Component } from "react";
import "./CartaImitador.css";

import imgfrente from "../../img/imitador.jpg"
import imgComun from "../../img/posterior.png"

class CartaImitador extends Component {
  click= (event)=>{
    this.props.toggle(this.props.index)
  }
  render() {
    let img;
    if (this.props.visible) {
      img = imgfrente
    } else { img = imgComun }

    let classhidden;
    if(this.props.hidden===true){
      classhidden= "carta-imitador hidden"
    }else{
      classhidden= "carta-imitador"
    }

    return (
      <div className="carta col-3">
        <img className={classhidden} src={img} onClick={this.click} img alt="carta imitador" />
      </div>
    )
  }
}

export default CartaImitador;