import React from 'react';
import p404 from '/src/assets/img/cat404.gif';

function NotFound() {
  return (
    <div>
      <img
        src={p404}
        alt='Descripción de la imagen'
        className='img-fluid crearuta-image' // Clase para la imagen
      />
      <h4>oh no! </h4>
      <h1>Error 404 - OH NO KITTY!</h1>
      <p>is this a me... adorable little thing uwu</p>
    </div>
  );
}

export default NotFound;
