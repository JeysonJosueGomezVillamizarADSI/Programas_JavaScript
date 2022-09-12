const pi = 3.1415;

let altura = Number(prompt("Digite la altura del elipsoide : "));
let largo = Number(prompt("Digite el largo del elipsoide : "));
let ancho = Number(prompt("Digite el ancho del elipsoide : "));

let volumen = (4/3)*pi*altura*largo*ancho;

alert("El volumen del elipsoide es " + volumen);

