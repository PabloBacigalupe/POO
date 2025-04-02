
// let persona = function (nombre, apellido, altura, peso, pelo){

//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.altura = altura;
//     this.peso = peso;
//     this.pelo = pelo;
// }

// let persona001 = new persona ('Alfredo', 'Stefano', 178, 72, 'moreno');
// let persona002 = new persona ('Ana', 'Luna', 156, 49, 'rubio');
// let persona003 = new persona ('Mario', 'Martinez', 180, 83, 'castaño');
// let persona004 = new persona ('Mila', 'Soler', 168, 72, 'canoso');

// console.log(persona001);
// console.log(persona002);
// console.log(persona003);
// console.log(persona004);



// let coche = function (marca, modelo, año, color, gama, precio) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.año = año;
//     this.color = color;
//     this.gama = gama;
//     this.precio = precio;
// };

// Extension del prototipo
      
// coche.prototype.detalles = function () {
//     console.log('Tu coche es un '+ this.marca +  ', modelo '+ this.modelo + ', del año ' + this.año + ', de color ' + this.color + ' , de gama ' + this.gama + ' y vale ' + this.precio);
    
// }

// let miCoche = new coche ('Citroen', 'BX', 1992, 'azul marino', 'media', 8000);
// miCoche.detalles();


// let CocheCaro = new coche ('Mercedes', 'Clase A', 2023, 'blanco perla', 'alta', 105000);
// let CocheMedio = new coche ('Audi', 'A3', 2021, 'cobalto', 'media', 50000);
// let CocheBarato = new coche ('Renault', 'Clio', 2021, 'negro', 'baja', 10000);

// console.log(CocheCaro);
// console.log(CocheMedio);
// console.log(CocheBarato);


//Ejercicio POO 1
//1.1
// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), 
// que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
        
    obtDetalles() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
    }

}

let persona1 = new Persona("Paco", 57, "Masculino");
persona1.obtDetalles();

let guion = '-';
console.log(guion);



//1.2
// Crear la clase Estudiante, que hereda de Persona, 
// e incluye las propiedades curso y grupo y el método registrar(), 
// que muestre por pantalla el resultado.


class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero); // llama al constructor de persona
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`Estudiante: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Grupo: ${this.grupo}`);
    }
}

let estudiante1 = new Estudiante("Fernanda", 17, "Mujer", "3º", "A");
estudiante1.registrar();


console.log(guion);

//1.3
// Crear la clase Profesor, que hereda de Persona, 
// e incluye las propiedades asignatura y nivel y el método asignar(), 
// que muestre por pantalla el resultado.


class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero); // Hereda propiedades de Persona
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar() {
        console.log(`Profesor: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Asignatura: ${this.asignatura}`);
        console.log(`Nivel: ${this.nivel}`);
    }
}

let profe1 = new Profesor("Lucía", 35, "Femenino", "Matemáticas", "Secundaria");
profe1.asignar();

















