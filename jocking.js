class Climber {
    constructor (id, version, top) {
        this.id = id,
        this.version = version,
        this.top = top
    }
    Greetings () {
        console.log(`Hi, im ${this.id} in my verion ${this.version}, and I wish you a Happy New Year from my mountain ${this.top}`)
    }
}
let climber = new Climber ('Lifemountains', 45, 'Cervino')
let climber2 = new Climber ('Josenderos', 47, 'Ocejon')
let climber3 = new Climber ('Angeluwild', 33, 'Balaitous')
let climber4 = new Climber ('Urtzisanchez', 35, 'Toubkal')

console.log(" ")
climber.Greetings()
climber2.Greetings()
climber3.Greetings()
climber4.Greetings()
console.log(" ")