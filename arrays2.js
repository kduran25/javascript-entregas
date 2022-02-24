console.log('Arrays 2');

class Grade{
    constructor(name, score){
        this.name = name
        this.score = score
    }
}

const subjects = ['Matematicas', 'Fisca', 'Quimica', 'Artes']
let grades = []

for (const subject of subjects) {
    let score = prompt (`Calificacion de ${subject}`)
    grades.push(new Grade(subject, score))
}

console.log(grades)