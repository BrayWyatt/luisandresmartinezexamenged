import React, { Component } from "react";
import "./CartaDragon.css";

import imgfrente from "../../img/dragon.jpg"
import imgComun from "../../img/posterior.png"

class CartaDragon extends Component {
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
      classhidden= "carta-dragon hidden"
    }else{
      classhidden= "carta-dragon"
    }

    return (
      <div className="carta col-3">
        <img className= {classhidden} src={img} onClick={this.click} img alt="carta dragón" />
      </div>
    )
  }
}

export default CartaDragon;