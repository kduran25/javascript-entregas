console.log('Desafio entregable')

// Pedir calificaciones
// Hasta que el usuario ingrese la palabra: 'listo'
// Calcular su promedio e imprimirlo en consola
// Indicar si con el promedio obetnido se puede Aprobar o Reprobar

let entrada = '';
let contador = 0;
let suma = 0;


const calcularPromedio = (total, conteoDeCalificaciones) => {
    return total/conteoDeCalificaciones
}

while (true) {
    entrada = prompt('Dame una calificacion (listo para terminar)')
    if (entrada == 'listo') {
        break
    }
    
    if(parseInt(entrada) >= 0 && parseInt(entrada) <= 100) {
        contador++
        suma = suma + parseInt(entrada)
    } else {
        alert('Calificacion no valida')
    }

    
}

console.log('El total de tus calificaciones es:', suma);
console.log('Tu promedio es:', calcularPromedio(suma, contador))

if (calcularPromedio(suma,contador) < 50) {
    console.log('Reprobaste, necesitas un promedio de 50 para aprobar') 
} else{
  console.log('Felicidades, has aprobado el curso')      
}
