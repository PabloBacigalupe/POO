//MAYAS Y AZTECAS

// Resulta que, hace mucho tiempo, encontraron un azteca y un maya sendas fórmulas, 
// la del Cola Cao y del Nesquik, respectivamente.
// Ambos se hicieron una ofrenda, para probar el descubrimiento del opuesto, 
// y descubrieron que les gustaba más el descubrimiento del otro.
// -- ¡¿Cómo era posible que los "grumitos" molaran tanto?!
// Decía uno.
// -- ¡¿Cómo es posible que, incluso con la leche fría, 
// se disolviera tan fácilmente?!
// Pensaba el otro.

// Comenzó, desde entonces, una lucha legendaria entre ambos pueblos, 
// que se extendió al resto del mundo hasta nuestros días.

// Requisitos
// Precurso Web
// Javascript orientado a objetos
// Iteraciones

// El ejercicio en cuestión será de cómo, cierto día, intentaron resolver "a golpes" su disputa.
// Construye las siguientes clases:
// Warrior:
// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. 
// Después, imprime el valor de la vida restante.

// Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, 
// que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder.

// Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, 
// que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.
// Realiza la siguiente cadena de intercambio de golpes.

// Azteca bebe nesquik
// Maya bebe Cola Cao


class Warrior{
    constructor(life, power){
        this.life = life;
        this.power = power;
    }
    attack(){
        return `Este es el poder de ${this.power}.`
    }
    defend(damage){
        this.life = this.life - damage;
        console.log(`¡Defensa! Te quedan ${this.life} de vida.`);

    }

}


// Crear guerreros
let Maya = new Warrior(100, 200);
let Azteca = new Warrior(100, 200);

// Azteca bebe Nesquik (+10 vida)
Azteca.life += 10;

// Maya bebe Cola Cao (+10 poder)
Maya.power += 10;

// Maya ataca a azteca. Azteca defiende.
// Azteca ataca a maya. Maya defiende.

let dañoMaya = Maya.power;
console.log(`¡Maya ataca con ${dañoMaya} de poder!`);
Azteca.defend(dañoMaya);

let dañoAzteca = Azteca.power;
console.log(`¡Azteca ataca con ${dañoAzteca} de poder!`);
Maya.defend(dañoAzteca);


console.log("Maya:", Maya);
console.log("Azteca:", Azteca);










