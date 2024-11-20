import React from 'react';
import './Contacts.css';

const Contacts = () => (
  <div className="contacts">
    <h1>Contactos</h1>
    <p>Encuéntranos en nuestra tienda o en redes sociales:</p>
    <ul>
      <li>Facebook: LlamitaSport</li>
      <li>Instagram: @LlamitaSport</li>
    </ul>
    <iframe 
      title="Mapa" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098655!2d144.95605431549468!3d-37.81627974202132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b23f11ecdf42!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510913115603" 
      width="600" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen=""
    ></iframe>
  </div>
);

export default Contacts;
