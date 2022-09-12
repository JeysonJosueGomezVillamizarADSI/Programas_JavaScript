let precioProducto = Number (prompt("Digite el precio del prodcuto : "));
let Iva = Number (prompt("Digite el Iva sin % : "));

let TotIva = Iva/100;

let IvaProducto = precioProducto* TotIva;

let pagoTotal = precioProducto + IvaProducto;

alert ("El iva del producto es de : " + IvaProducto);
alert ("El total a pagar del producto es de : " + pagoTotal);

