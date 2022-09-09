let espacio = Number (prompt("Digite el espacio en km recorido de  la bala" ));
let tiempo = Number (prompt("Digite el tiempo recorrido de la bala"));

let velocidad = (espacio*1000) / (tiempo*60);

alert ("La velocidad recorrida del proyectil es " + velocidad + "'m/s'");