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
            image:'https://i.ibb.co/fk878Lp/Frame-block-1.png',
            title: 'Produção audiovisual',
            text: 'Coordenação de projetos e produções de conteúdo em vídeo publicitário'

        },

        {
            link:'https://youtu.be/j_aPcF0fpaE',
            image:'https://i.ibb.co/x3BJQ2n/Frame-block-2.png',
            title: 'Motion Graphics',
            text: 'Animação em técnicas de motion 2D para vídeos explicativos publicitários'

        },

        {
            link:'https://youtu.be/iBDFwygETSA',
            image:'https://i.ibb.co/b5Frhs6/Frame-block-3.png',
            title: 'Transmissão ao vivo',
            text: 'Coordenação e operação de transmissões ao vivo para eventos em geral'

        }
    ];

    return (

        <section id="services" className="services-area">
            <h2> Conheça o meu trabalho </h2>
            <div className="blocks-area">
            {services.map(
            (service, index) =>
                <ItemProduct>
                    key={index}
                    link={service.link}
                    image={service.image}
                    title={service.title}
                </ItemProduct>
        )}
            </div>
    </section>
    )

}

export default Products;
