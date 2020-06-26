import React, { Component } from "react";
import "./CartaJuez.css";

import imgfrente from "../../img/juez.jpg"
import imgComun from "../../img/posterior.png"

class CartaJuez extends Component {
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
      classhidden= "carta-juez hidden"
    }else{
      classhidden= "carta-juez"
    }

    return (
      <div className="carta col-3">
        <img className={classhidden} src={img} onClick={this.click} img alt="carta juez" />
      </div>
    )
  }
}

export default CartaJuez;