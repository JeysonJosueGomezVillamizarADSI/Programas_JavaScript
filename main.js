const  precminuto= 355;

let minutos = Number (prompt("Ingrese la cantidad de minutos gastados en la llamada : "));

let pagosinva = minutos*precminuto;

let iva = (precminuto*0.20);

let pagototal = pagosinva + iva ;

alert("El pago de la llamada telefonica es de " + pagototal + " Iva incluido");

