/*File - new folder - new file.js  ... Terminal - new terminal - write "npm init - answer questions... "npm init -y" 
answer questions by default.
//and two for coment line... 
upload git - source code control, commit, name, public or private, copy url
Tipado indiferido, primitive types = number 123, "string", boolean (true/false), null (empaty in memory), undefined..
;end of line .to access attributes []arrays ()functions {}delimits objects, for functions, control structures,
and in the functions it will pass everything that is
between braces*/

/* LISTAS ARRAYS

const lista = [1, "hola", true, "etc"];
const lista3 = new array [3];
lista3 [0] = "soy la posición uno";
const lista4 = [lista, lista3];

//      OBJECTS
const movil = {
    Altura: 10,
    Marca: "xiaomi",
    Iswhite: false,
    Contactos: [oscar, urtzi],
    Tarjeta: {
        Marca: "sandisk",
        Almacenamiento: 32
    } 
    
}
//To access objects
movil.Tarjeta.Marca
movil.year = 2016;
//To add 

// Dates, date zero is 1-january-1970, january is 0 and december is 11
const now = new Date();
const now1 = new Date(2022, 0, 29);
const month = now.getMonth() +1;
const year = now.getFullYear();

// Forks(bifurcaciones) if, else, switch

let balance = 50;
let cash = 20;

if (cash < balance){
    console.log("you can get money")
} else {
    console.log("insufficient balance")
}
//you can

/* 
less than < >greater than     less or equal <= >= greater or equal
== equal to                 === equal (value and type)  != differet to
if= si else= si no     else if= en otro caso       while= mientras */

/* if else + if else

let note = 3;

if (note === 3){
    console.log("sobresaliente");
} else if (note === 2){
    console.log("suficiente");
} else if (note === 1){
    console.log("insuficiente")
} else {
    console.log("error, introduce del 1 al 3")
}

// Switch

let nota = 1;

switch (nota) {
    case 3:
        console.log("sobresaliente");
        break;
    case 2:
        console.log("suficiente");
        break;
    case 1:
        console.log("insuficiente");
        break;
        default:
            console.log("error");
            break;
}

//FOR (statament; condition; action) // expect result 0,1,2,3,4,5,6,7,8,9
for (let i = 0; i < 10; i = i++) {
console.log(i);
}

//STRUCTURE FOR ... OF (expect result 1,2,3)
let list = [1, 2, 3];
for (let valor of list) {
    console.log(valor);
}

//STRUCTURE FOREACH (expect result 1,2,3)
list.forEach (valor => {
    console.log(valor);
})

// ACCESS AN OBJECT
for (let propiedad in persona);


//LOOPS (BUCLES) WHILE (0 1 2 3 4 5 6 7 8 9)
let i = 0;
let max = 10;
while (i < max) {
    console.log(i);
    i++;
}

/* Continue and break no use or do not abuse
let i, let j, let k, (iterators, var to increase value)
in the loops declare variables to control the scope. */
/*
// INSERT VAR IN A TEXT
let name = "oscar";
let Greeting = 'Hi, ${name} welcome';
console.log(Greeting);

// LENGTH (LONGITUD) OF A STRING (expect result 18)
let str = "Hola soy un string";
console.log(str.length);

// GET A PART (expect result - soy u -)
let slice_str = str.slice (5, 10);
console.log(slice_str);
// (or substring.str will be the same)

//REPLECE A PART
let cadena = "Hola mi nombre es Oscar";
let nuevaCadena = cadena.replace('Oscar', 'Urtzi');
//expect result Hola mi nombre es Urtzi
//it only acts on the first one it finds
//to change all:   cadena.replace(/Oscar/g, 'Urtzi');
// will change all oscar!!

// .match (buscar y obtener el numero de veces que se repite una palabra en un texto)
// .icludes("palabra a buscar") te dice si existe o no con true o false
//  .startwith (devuelve true o false la letra, palabra o numero que empieza)
//  .endswith (devuelve true o false la letra, palabra o numero que termina)
*/

// ARRAYS 
let array = []