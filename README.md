# Cardify

Cardify es una librería de jQuery que permite oscurecer una imagen y mostrar la información contenida en su atributo ```alt``` al pasar el cursor sobre ella (usando el evento mouseover). Para ello se debe asignar la clase ```imgHover``` al div contenedor de las imágenes en las cuales se requiere el efecto:

```html

<div class='imgHover'><img>src="ruta-imagen" alt="frase que se muestra al pasar el mouse"</img></div>

```

## Requerimientos técnicos

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

- Descarga el ropositorio github.

- Enlaza jQuery en tu proyecto y el archivo main.js en la carpeta lib.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="./lib/main.js"></script>
```

## Ejemplos
