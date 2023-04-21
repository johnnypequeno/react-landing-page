import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import './Media.css';
import imgWhatsapp from './img/icons8-whatsapp.svg';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Curriculum from './components/Curriculum/Curriculum';



function App() {
  return (
    <>
       <BrowserRouter>
       <header>
            <div id="title"> 
            <Link to="/"><h1>Johnny <span>Pequeno</span></h1></Link> </div>
            <ul>
              <li><Link to="/curriculum">Currículo</Link></li>
              <li><Link to="/products">Serviços</Link></li>
              <a href="#contact"><li>Contato</li></a>
              <li><a href= "https://wa.me/message/H3OPBKE4DNWSK1" target="_blank"><img src= {imgWhatsapp} alt="WhatsApp" id="img-btn"/></a></li>
            </ul>
        </header>
        <Routes>
            <Route index element={<Information /> } />
            <Route path="products" element={<Products />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
       <Contact></Contact>
       <Footer></Footer>
    </>
  )
}

export default App