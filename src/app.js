// const $ = require('jQuery');

$(document).ready(() => {
  let imgHover = $('.imgHover');
  cardify(imgHover);
});

const cardify = (container) => {
  // Buscar todas las imagenes en el contenedor
  let foundImg = container.find('img');
  console.log(foundImg);
  // envuelvo la imagen en un elemento figure
  foundImg.wrap('<figure class="cardifyFigure "style="position: relative"></figure>');
  // agrego el figcaption pero vacio
  $('figure').append('<figcaption style="position: absolute; display: block; text-align: center; font-size: 100%; color: #FFFF"></figcaption>');
  hoverMouse($('figure'));
  outMouse($('figure'));
};
const hoverMouse = (image) => {
  image.mouseover(function() { // ---------------------------------duda
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

module.exports = cardify;
