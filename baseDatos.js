const pelicula = {
    titulo: "pepe el boxeador",
    year: 2005,
    director: "juan"
}

const pelicula2 = {
    titulo: "aviones",
    year: 1975,
    director: "steph"
}

let filmoteca = [pelicula, pelicula2];

for (let i = 0; i < filmoteca.length; i++){
    console.log(filmoteca[i].director);
}