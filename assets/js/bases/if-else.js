let a = 5;

if(a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
};

// console.log('Fin de programa');

const hoy = new Date();

console.log(hoy);
let dia = hoy.getDay();

console.log({dia});

if(dia === 0) {
    console.log('Hoy es Domingo');
} else if (dia === 1) {
    console.log('Hoy es Lunes');
} else if (dia === 2) {
    console.log('Hoy es Martes');
} else {
    console.log('No es Lunes, Martes o Domingo...');
}

// Sin usar If else, o switch, unicamente objetos

dia = 3;

diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log(diaSemana[dia]);