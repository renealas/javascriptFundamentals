function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return 1;

    //Este codigo jamas se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
};

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
};

const retornodeSaludar = saludar('Rene', 40, true, 'El Salvador');

//console.log({retornodeSaludar});

// saludar2('Rene');

// saludarFlecha('Sofia');

// function sumar(a,b) {
//     return a + b;
// };

const sumar2 = (a,b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random(); 

console.log(getAleatorio2());