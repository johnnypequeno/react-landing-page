import React, { useState } from 'react';

function Contact() {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [tel, setTel] = useState ("");
    const [message, setMessage] = useState ("");

    function enviarFormulario(event) {
        event.preventDefault();
        console.log ("Formulário enviado!")

        const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${tel}\nMensagem: ${message}`

        const numeroWhatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;

        const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(text)}`;

        window.open (linkWhatsapp, '_blank')
    }

    return (
    <>
    <form onSubmit= {enviarFormulario}>
        
        <h2>Entre em contato</h2>
        <fieldset>
            <label htmlFor="input-name">Nome</label>
            <input 
            type= "text" 
            name = "input-name" 
            id="input-name" 
            placeholder= "Digite seu nome" 
            required minLength={2}
            value = {name}
            onChange={(event) => setName(event.target.value)}
            />
        </fieldset>

        <fieldset>
            <label htmlFor="input-email">E-mail</label>
            <input 
                type= "email" 
                name = "input-email" 
                id= "input-email" 
                placeholder= "Digite seu e-mail" required
                value = {email}
                onChange={(event) => setEmail(event.target.value)}
            />
        </fieldset>

        <fieldset>
            <label htmlFor="input-tel">Telefone</label>
            <input 
                type= "tel" 
                name = "input-tel" 
                id= "input-tel" 
                placeholder= "(99) 99999-9999" 
                required pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                maxLength={15}
                value = {tel}
                onChange={(event) => setTel(event.target.value)}
            />
        </fieldset>

        <fieldset>
            <label htmlFor="input-msg">Mensagem</label>
            <textarea 
                name = "input-msg" 
                id= "input-msg" 
                cols="30" 
                rows="10" 
                placeholder= "Deixe sua mensagem" 
                required 
                value = {message}
                onChange={(event) => setMessage(event.target.value)}>
            </textarea>
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
