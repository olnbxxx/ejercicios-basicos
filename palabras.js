/*
Dadas una frase y una letra, muestrar por pantalla
el número de veces que aparece la letra en la frase.
*/

let frase = "Hoy fui a hacer la compra"
let vocal1 = "a"
let vocal2 = "o"

function contarLetra(frasegenerica, letragenerica){
    let contador = 0
    for(let i = 0; i < frasegenerica.length; i++){
        if(frasegenerica[i] == letragenerica) {
            contador++;
        }
    }
    console.log(contador);
}

contarLetra(frase, vocal1)
contarLetra(frase, vocal2)