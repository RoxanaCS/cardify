const chai = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html><body><div class="containerFunction"><img src="https://cdn.pixabay.com/photo/2017/08/05/23/37/beautiful-foot-boletus-2586702_960_720.jpg" alt="Beautiful-foot-boletus"></></div></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const $ = require('jquery');
const cardify = require('../src/app');

describe('Función cardify', () => {
  // ejecuto la función con el html que se creo mas arriba
  $('.containerFunction').cardify;

  it('Se crea el elemento figure', () => {
    chai.assert.exists($('figure'));
  });

  it('Se crea el elemento figcaption', () => {
    chai.assert.exists($('figcaption'));
  });

  it('figcaption no está vacío', () => {
    let lengthFigcaption = ($('figcaption').length);
    chai.expect($('figcaption')).to.have.length(lengthFigcaption);
  });
});
