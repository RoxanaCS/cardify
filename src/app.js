const $ = require('jquery');
const cardify = {};

$(document).ready(() => {
  $('.imgHover').cardify();
});

(function($) {
  $.fn.cardify = function() {
    // Buscar todas las imágenes en el contenedor
    let foundImg = this.find('img');
    // envuelvo la imagen en un elemento figure
    foundImg.wrap('<figure class ="imgFigure" style="position: relative; display:inline-block"></figure>');
    // agrego el figcaption pero vacio
    $('figure').append('<figcaption class="imgFigcaption" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5em; font-weight: bolder; text-align: center; color: #FFF"></figcaption>');
    hoverMouse($('figure'));
    outMouse($('figure'));
  };
  const hoverMouse = (image) => {
    image.mouseover(function() {
      // obtener el alt de la images y guardarlo
      let attrAlt = $(this).children('img').attr('alt');
      // hacer que la imagen se oscurezca
      let newImg = $(this).children('img').css('filter', 'brightness(0.1)');
      // muestre el contenido del alt en el figcaption
      $(this).children('figcaption').append(attrAlt);
    });
  };
  const outMouse = (image) => {
  // evento para que desapareza el efecto anterior
    image.mouseout(function() {
      $(this).children('img').css('filter', 'brightness(1)');
      $('figcaption').html('');
    });
  };
})($);

module.exports = cardify;
