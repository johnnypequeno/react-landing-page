import React from 'react';

function Contact() {

    function enviarFormulario(event) {
        event.preventDefault();
        console.log ("Formulário enviado!")
    }

    return (
    <>
    <form onSubmit= {enviarFormulario}>
        
        <h2>Entre em contato</h2>
        <fieldset>
            <label htmlFor="input-name">Nome</label>
            <input type= "text" name = "input-name" id="input-name" placeholder= "Digite seu nome" required minLength={2}/>
        </fieldset>

        <fieldset>
            <label htmlFor="input-email">E-mail</label>
            <input type= "email" name = "input-email" id= "input-email" placeholder= "Digite seu e-mail" required/>
        </fieldset>

        <fieldset>
            <label htmlFor="input-tel">Telefone</label>
            <input type= "tel" name = "input-tel" id= "input-tel" placeholder= "(99) 99999-9999" required pattern=''/>
        </fieldset>

        <fieldset>
            <label htmlFor="input-msg">Mensagem</label>
            <textarea name = "input-msg" id= "input-msg" cols="30" rows="10" placeholder= "Deixe sua mensagem" required ></textarea>
        </fieldset>

        <center>
            <input type="submit" value="Enviar" className="button"/>
        </center>

    </form>
    </>
    /*<>
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
    </>*/
    )
}

export default Contact;
