import React from 'react';
import imageMain from '../../img/IMAGEM MAIN.png';
import Portfolio from '../Porftolio/Portfolio';

function Information() {
   return (
    <>
    <main> 
        <article>
            <img src= {imageMain} alt="Johnny Pequeno"/>
        </article>

         <aside>
             <h2>Olá, vamos produzir juntos?</h2>
             <p> Sou jornalista e produtor audiovisual, com mais de 10 anos de carreira. Aqui, você vai conhecer o meu trabalho e descobrir como posso ajudar a produzir histórias de sucesso para sua marca.</p>
             <a href="/curriculum"><li>Saiba mais</li></a>
        </aside>
    </main> 
    <Portfolio></Portfolio>
    </>
    )
}

export default Information;