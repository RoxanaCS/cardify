const chai = require('chai');
// const chaiDom = require('chai-dom');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html><body><div class="containerFunction"><img src="https://cdn.pixabay.com/photo/2017/08/05/23/37/beautiful-foot-boletus-2586702_960_720.jpg"></></div></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const $ = require('jquery');
const CABDom = require('../src/app');

describe('Función cardify', () => {
  let imgHover = $('.containerFunction');
  CABDom(imgHover);
  it('Se crea el elemento figure', () => {
    chai.assert.exists($('.cardifyFigure').change);
  });
});
