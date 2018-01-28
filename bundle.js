(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const $ = require('jQuery');

$(document).ready(function() {
  let imgHover = $('.imgHover');
  cardify(imgHover);
});

function cardify(container) {
  // Buscar todas las imagenes en el contenedor
  let foundImg = container.find('img');
  console.log(foundImg);
  // envuelvo la imagen en un elemento figure
  foundImg.wrap('<figure class="cardifyFigure "style="position: relative"></figure>');
  // agrego el figcaption pero vacio
  $('figure').append('<figcaption style="position: absolute; display: block; text-align: center; font-size: 100%; color: #FFFF"></figcaption>');
  hoverMouse($('figure'));
  outMouse($('figure'));
}
function hoverMouse(image) {
  image.mouseover(function() {
    // obtener el alt de la images y guardarlo
    let attrAlt = $(this).children('img').attr('alt');
    // hacer que la imagen se oscurezca
    let newImg = $(this).children('img').css('filter', 'brightness(0.1)');
    // muestre el contenido del alt en el figcaption
    $(this).children('figcaption').append(attrAlt);
  });
}
function outMouse(image) {
// evento para que desapareza el efecto anterior
  image.mouseout(function() {
    $(this).children('img').css('filter', 'brightness(1)');
    $('figcaption').html('');
  });
}

module.exports = cardify;

},{}]},{},[1]);
