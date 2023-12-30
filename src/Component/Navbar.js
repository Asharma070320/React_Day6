import { useState } from "react";

function Navbar(props){
   
    // let[Number,setNumber]= useState(0);
    return(
        <div className="navbar">
           <nav className="nav">
            <p>UseReducer</p>
            <i className="ri-shopping-cart-2-fill"><p className="up">{props.send}</p></i>
           </nav>
        </div>
    );
}
export default Navbar