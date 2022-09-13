let sueldo = Number (prompt("Digite el sueldo del vendedor : "));
let venta1 = Number(prompt("Digite el total de la primera venta : "));
let venta2 = Number(prompt("Digite el total de la segunda venta : "));
let venta3 = Number(prompt("Digite el total de la tercera venta : "));

let comision=((venta1+venta2+venta3)/3)*0.10;
let sueldoTotal= sueldo + comision;

alert("La comision que le corresponde al vendedor es de " + comision);
alert("El sueldo total con la comision incluida es de " + sueldoTotal);

