const xxx = require('../src/app'); // exportamos la funcion
let assert = require('assert');
let expect = require('chai').expect;

describe('Cardify', function() { // indica el modulo que vamos a testear
  it('Should be a .jgp image ', function() {

    var perro = document.getElementsByTagName('img');
    var src = perro.attr('src');
    console.log(src);
    var img = '';
    $(img).src.val = gato
    document.getElementById('myPhoto').src=img;
    expect( img).to.equal('.jpg');
  });
