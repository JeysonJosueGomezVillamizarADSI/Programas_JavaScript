let parcial1= Number (prompt("Digite la calificacion del primer parcial : "));

let parcial2= Number (prompt("Digite la calificacion del segundo parcial : "));

let parcial3= Number (prompt("Digite la calificacion del tercer parcial : "));

let examenFinal= Number (prompt("Digite la calificacion del examen final : "));

let trabajoFinal= Number (prompt("Digite la calificacion del trabajo final  : "));

let resultParciales = ((parcial1+parcial2+parcial3)/3)*0.55;
let resultExamenF = examenFinal*0.30;
let resultTrabajoF = trabajoFinal*0.15;

let calificacionFinal= (resultParciales+resultExamenF+resultTrabajoF);

alert("La calficacion del estudiante es : " + calificacionFinal);

