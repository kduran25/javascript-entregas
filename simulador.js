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
class Grade{
    constructor(name, score){
        this.name = name
        this.score = score
    }
}

const subjects = ['Matematicas', 'Fisica', 'Quimica', 'Contabilidad', 'Finanzas']
let grades = []

for (const subject of subjects) {
    let score = prompt (`Calificacion de ${subject}`)
    grades.push(new Grade(subject, score))
    
    if(parseInt(score) >= 0 && parseInt(score) <= 100) {
        contador++
        suma = suma + parseInt(score)
    } else {
        alert('Calificacion no valida, ingresa las notas de nuevo')
        prompt (`Calificacion de ${subject}`) 
    } 
}
grades.reverse()

console.log('El total de tus calificaciones es:', suma);
console.log('Tu promedio es:', calcularPromedio(suma, contador))



if (calcularPromedio(suma,contador) < 50) {
    console.log('Reprobaste, necesitas un promedio de 50 para aprobar') 
} else{
  console.log('Felicidades, has aprobado el curso')      
}

console.log(grades);
