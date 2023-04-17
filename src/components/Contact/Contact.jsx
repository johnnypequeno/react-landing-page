import React from 'react';

function Contact() {

    return (
    <>
        <div id="contact" className="area-form">
            <h2>Entre em contato</h2>
            <div className="form-box"> 
                <form>
                    <input type="text" id="f-name" placeholder="Nome" required></input>
                    <input type="email" id="f-email" placeholder="Email" required></input>
                    <input type="tel" id="f-phone" placeholder="Telefone"></input>
                    <textarea name="message" id="f-message" cols="30" rows="7" placeholder="Deixe sua mensagem"></textarea>
                    <input className="btn-submit" type="submit" id="f-button" value="Enviar"></input>
                </form>
            </div>
        </div>
    </>
    )
}

export default Contact;
