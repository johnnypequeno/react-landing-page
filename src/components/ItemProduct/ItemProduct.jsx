import React from "react";

import './ItemProduct.css'

function ItemProduct (props) {
    return (
        <div className="block-area">
                <a href= {props.link} target="_blank"><img src={props.image} alt="Demo reel - Produção audiovisual"/></a>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
        </div>
    );
}

export default ItemProduct;