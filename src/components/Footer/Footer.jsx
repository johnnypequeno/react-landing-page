import React from 'react';
import iconLinkedin from '../../img/icons8-linkedin.svg';
import iconWPP from '../../img/icons8-whatsapp.svg';
import iconYoutube from '../../img/icons8-youtube.svg';

function Footer() {
    return (
        <footer>
        <div className="social">
        <h4> Acompanhe minhas redes sociais </h4>
        <a href= "https://www.linkedin.com/in/johnnypequeno/" target="_blank"><img src={iconLinkedin} alt="Linkedin"/></a>
        <a href= "https://wa.me/message/H3OPBKE4DNWSK1" target="_blank"><img src={iconWPP} alt="WhatsApp"/></a>
        <a href= "https://youtube.com/produtoravertigo" target="_blank"><img src={iconYoutube} alt="YouTube"/></a>
        <h4> © 2023 | Desenvolvido com <span role="img" aria-label="sheep">❤️</span> por Johnny Pequeno</h4>
        </div>
      </footer>
    )
}

export default Footer;