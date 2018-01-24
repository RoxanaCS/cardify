$(document).ready(function() {
});
cardify();
// .imgHover es la clase que debe tener el contenedor que tenga las imágenes
function cardify() {
  // Buscar todas las imagenes en el contenedor
  let foundImg = $('.imgHover').find('img');
  // envuelvo la imagen en un elemento figure
  foundImg.wrap('<figure style="position: relative"></figure>');
  // agrego el figcaption pero vacio
  $('figure').append('<figcaption style="position: absolute; margin: 5em 5em; font-size: 150%; color: #FFF; text-align: center; display: block"></figcaption>');
  foundImg.mouseover(function() {
    // obtener el alt de la images y guardarlo
    let attrAlt = $(this).attr('alt');
    // hacer que la imagen se oscurezca
    let newImg = $(this).css('filter', 'brightness(0.1)');
    // obtener el src de la imagen
    let src = newImg.attr('src');
    // muestre el contenido del alt en el figcaption
    return newImg + $(this).siblings('figcaption').append(attrAlt);
  });
  // evento para que desapareza el efecto anterior
  foundImg.mouseout(function() {
    $(this).css('filter', 'brightness(1)');
    $('figcaption').html('');
  });
}
