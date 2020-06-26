import React, { Component } from "react";
import "./CartaMago.css";

import imgfrente from "../../img/mago.jpg"
import imgComun from "../../img/posterior.png"

class CartaMago extends Component {
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
      classhidden= "carta-mago hidden"
    }else{
      classhidden= "carta-mago"
    }

    return (
      <div className="carta col-3">
        <img className={classhidden} src={img} onClick={this.click} img alt="carta mago" />
      </div>
    )
  }
}

export default CartaMago;