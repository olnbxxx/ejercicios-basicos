/*
Escribir un programa que pregunte al usuario una cantidad a invertir, 
el interés anual y el número de años, y muestre por pantalla el capital
obtenido en la inversión cada año que dura la inversión.
*/

let inversion = 9000
let interes = 0.20
let year = 4

for (let i = 0; i < 4; i++){
    inversion = inversion + (inversion * interes); // inversion += inversion * interes
    console.log(inversion);
}

