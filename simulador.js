console.log('Desafio entregable')

// Pedir calificaciones
// Hasta que el usuario ingrese la palabra: 'listo'
// Calcular su promedio e imprimirlo en consola
// Indicar si con el promedio obetnido se puede Aprobar o Reprobar

let entrada = '';
let contador = 0;
let suma = 0;

class Grade{
    constructor(name, score){
        this.name = name
        this.score = score
    }
}
const subjects = ['Matematicas', 'Fisica', 'Quimica', 'Contabilidad', 'Finanzas'];
let grades = [];

subjects.forEach(subject => {
    let score = prompt(`Ingrese la calificacion de ${subject}`)

    if ( isNaN(parseInt(score)) || parseInt(score) > 100) {
        while(isNaN(parseInt(score)) || parseInt(score) > 100){
            alert('Calificacion no valida, ingresa las notas de nuevo (Notas de 0 a 100 en números)');
            score = prompt(`Calificacion de ${subject}`);
        }
        contador++
        suma = suma + parseInt(score)
        grades.push(new Grade(subject, score))
    }else {
        contador++
        suma = suma + parseInt(score)
        grades.push(new Grade(subject, score))
    }
})

const calcularPromedio = (total, conteoDeCalificaciones) => {
    return total/conteoDeCalificaciones
}
 if (calcularPromedio(suma,contador) < 50) {
     console.log('Reprobaste, necesitas un promedio de 50 para aprobar') 
 } else{
   console.log('Felicidades, has aprobado el curso')      
 }
 console.log('El total de tus calificaciones es:', suma);
 console.log('Tu promedio es:', calcularPromedio(suma, contador))
 console.log(grades);

// for (const subject of subjects) {
//     let score = prompt (`Calificacion de ${subjects}`)
// for (const subject of subjects){
//     let score = prompt (`Calificacion de ${subject}`)
// } while (parseInt(score) >= 0 && parseInt(score) <= 100) {
//     grades.push(new Grade(subject, score))
//     contador++
//     suma = suma + parseInt(score)
//     console.log('El total de tus calificaciones es:', suma);
//     console.log('Tu promedio es:', calcularPromedio(suma, contador))
//     } if (parseInt(score) > 100) {
//         alert('Calificacion no valida, ingresa las notas de nuevo')
//         let score = prompt (`Calificacion de ${subject}`)
//     } 






