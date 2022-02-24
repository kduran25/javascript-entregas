console.log ('Arreglos');


const calificaciones = [6, 7, 5, 9, 5, 2]

for( let i = 0; i < calificaciones.length; i++) {
    console.log(i, calificaciones[i])
}

calificaciones.shift()

console.log(calificaciones);

calificaciones.unshift(6);

console.log(calificaciones);