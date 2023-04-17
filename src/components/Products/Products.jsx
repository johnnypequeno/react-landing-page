import React from 'react';
import './Products.css';
import '../../Media.css';
import imgBlock1 from '../../img/Frame block 1.png';
import imgBlock2 from '../../img/Frame block 2.png';
import imgBlock3 from '../../img/Frame block 3.png';
import ItemProduct from '../ItemProduct/ItemProduct';

function Products () {

    const services = [
        {
            link:'https://youtu.be/j_aPcF0fpaE',
            image:'../../img/Frame block 1.png',
            title: 'Produção audiovisual',
            text: 'Coordenação de projetos e produções de conteúdo em vídeo publicitário'

        },

        {
            link:'https://youtu.be/j_aPcF0fpaE',
            image:'../../img/Frame block 2.png',
            title: 'Motion Graphics',
            text: 'Animação em técnicas de motion 2D para vídeos explicativos publicitários'

        },

        {
            link:'https://youtu.be/iBDFwygETSA',
            image:'../../img/Frame block 3.png',
            title: 'Transmissão ao vivo',
            text: 'Coordenação e operação de transmissões ao vivo para eventos em geral'

        }
    ];

    return (

        <section id="services" className="services-area">
            <h2> Conheça o meu trabalho </h2>
            <div className="blocks-area">
            {services.map(
            (service) =>
            <ItemProduct></ItemProduct>
        )}
            </div>
       {/* {services.map(
            (service) => 
            <div className="block-area">
                <a href= {service.link} target="_blank"><img key={service.id} src={service.image} alt="Demo reel - Produção audiovisual"/></a>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
            </div>
            )}
            </div>
        
        <div className="blocks-area">
            <div className="block-area">
                <a href= "https://youtu.be/j_aPcF0fpaE" target="_blank"><img src={imgBlock1} alt="Demo reel - Produção audiovisual"/></a>
                <h3>Produção audiovisual</h3>
                <p>Coordenação de projetos e produções de conteúdo em vídeo publicitário</p>
            </div>

            <div className="block-area">
                <a href= "https://youtu.be/_Qm09xWEh4U" target="_blank"><img src={imgBlock2} alt="Portfólio motion 2D"/></a>
                <h3>Motion Graphics</h3>
                <p>Animação em técnicas de motion 2D para vídeos explicativos publicitários</p>
            </div>

            <div className="block-area">
                <a href= "https://youtu.be/iBDFwygETSA" target="_blank"><img src={imgBlock3} alt="Demo Reel - Transmissão ao Vivo"/></a>
                <h3>Transmissão ao vivo</h3>
                <p>Coordenação e operação de transmissões ao vivo para eventos em geral</p>
            </div>

        </div>*/}

    </section>
    )

}

export default Products;
