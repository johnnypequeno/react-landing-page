import React from "react";

import './ItemProduct.css'

function ItemProduct () {
    return (
        <div className="block-area">
                <a href= {service.link} target="_blank"><img key={service.id} src={service.image} alt="Demo reel - Produção audiovisual"/></a>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
        </div>
    );
}

export default ItemProduct;