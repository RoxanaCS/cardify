# Cardify

Cardify es una librería de jQuery que te permite sobreponer texto en una imagen al pasar el mouse sobre ella.

## Características:

- [x] Utiliza el evento mouseover.
- [x] Cambia el brillo de la imagen, oscureciéndola.
- [x] Muestra el contenido de su atributo ```alt```.
- [x] Permite utilizar cualquier extensión de imagen (.png, .gif, .jpg, entre otras).

## Uso

Para utilizar este plugin debes asignar la clase ```imgHover``` al div contenedor de las imágenes en las cuales se requiere el efecto:

```html

<div class='imgHover'><img>src="ruta-imagen" alt="frase que se muestra al pasar el mouse"</img></div>

```

## Especificaciones técnicas

El proyecto se realizó con las siguientes tecnologías:

Herramientas de desarrollo:
+ Control de versiones GIT
+ chai v.4.1.2
+ mocha v.5.0.0
+ jsdom v.11.6.1
+ chai-jq v.0.0.9
+ browserify v.15.2.0
+ npm v.5.6.0

Herramientas de producción:
+ jQuery v.3.2.1
+ browserify v.15.2.0

Extra: Atom ESLint con la guía de estilos de Google para Laboratoria.

## Instalación

- Descarga este repositorio github.

- Enlaza el archivo main.js que se encuentra dentro de la carpeta lib.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="./lib/main.js"></script>
```
![carpeta](/assets/img/imagen.png)

## Demo

https://aguerrav.github.io/demo-cardify/

## Ejemplos de uso

![ejemplo-de-uso](https://media.giphy.com/media/xThtaygOxYCxhrKEgw/giphy.gif)

![ejemplo-de-html](/assets/img/cardifyimg.jpg)
