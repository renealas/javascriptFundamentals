
class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() { 
        console.log(this.nombre);
        console.log('Hola a todos, soy un metodo statico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase') {
        //console.log('Hola!');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        
        Persona._conteo++;
    }

    set setComidaFavorita (comida) {
        this.comida = comida;
    }

    get getComidaFavorita () {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`Frase ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
//const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

//console.log(ironman);

spiderman.miFrase();
// ironman.quienSoy();

spiderman.setComidaFavorita = 'El pie de cereza de la Tia May';
//spiderman.nemesi = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);
//console.log(spiderman);
//Persona._conteo = 2;
console.log('Conteo statico ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);