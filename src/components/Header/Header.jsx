import React from 'react';
import imgWhatsapp from '../../img/icons8-whatsapp.svg';
import { Link } from "react-router-dom";

function Header () {
    return (
        <header>
            <div id="title"> 
            <a href="index.html"><h1>Johnny <span>Pequeno</span></h1></a> </div>
            {/*<ul>
                <a href="pages/curriculo.html"><li>Currículo</li></a>
                <a href="pages/services.html"><li>Serviços</li></a>
                <a href="#contact"><li>Contato</li></a>
                <a href= "https://wa.me/message/H3OPBKE4DNWSK1" target="_blank"><img src= {imgWhatsapp} alt="WhatsApp" id="img-btn"/></a>
            </ul>*/}
       </header>
       )
}

  export default Header;