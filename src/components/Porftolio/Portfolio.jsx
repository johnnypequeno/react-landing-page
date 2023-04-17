import React from 'react';
import imgBlock1 from '../../img/Frame block 1.png';
import imgBlock2 from '../../img/Frame block 2.png';
import imgBlock3 from '../../img/Frame block 3.png';

function Portfolio() {

    return (
        <>
        <section id="services" className="portfolio-area">
        <div className="btn-services">
        <a href= "/products"><h2>Meus serviços</h2></a>
       
        </div>
            <div className="blocks">
                <div className="block">
                    <img src={imgBlock1} alt="Produção Audiovisual"/>
                    <h3>Produção audiovisual</h3>
                </div>

                <div className="block">
                    <img src={imgBlock2} alt="Motion 2D"/>
                    <h3>Motion Graphics</h3>
                </div>

                <div className="block">
                    <img src={imgBlock3} alt="Transmissão ao vivo"/>
                    <h3>Transmissão ao vivo</h3>
                </div>
            </div>
    </section>
    </>
    )
}

export default Portfolio;