let nombre:string;
let apellido:string;
let edad:number;
let booleano:boolean;
let hoy:Date = new Date();
let cualquiera:any;
//objeto
let spiderman = {
    nombre: "Peter",
    edad:20;
}

//plantillas literarias
let texto = `Hola, ${nombre} ${apellido}
(${edad})`;


//Funcion de flecha, estas siempre apuntan al this
let miFuncionF = (a:number, b:number) => a+b;

let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout(()=> console.log(this.nombre + "smash"),1500)
    }
}

hulk.smash();

//Destruccion de objetos y arreglos
let avenger = {
    name: "Steve",
    poder: "Super fuerza"

}
let {name, poder} = avenger;

//Destruccion de arrays
let avenger2:string[]=["Thor","Steve"];
let [var1,var2]=avenger2;

//interface
interface Vengadora{
    nombre: string,
    poder:string
};
function enviarMision (v:Vengadora){
console.log("Enviando a: "+v.nombre)
}
let brujaEscarlata:Vengadora={
nombre: "Bruja Escalata",
poder: "Magia"
}

//Clase

class Vengadora2 {
    nombre:string;
    poder:string;
    edad:number;

    constructor(nombre:string, poder:string, edad:number){
        this.nombre=nombre;
        this.poder=poder;
        this.edad=edad;
    }
}

let viudaNegra:Vengadora=new Vengadora2("Scarlett Johanson","Armas",30);
console.log(viudaNegra);


//Decoradores son para agregar funciones a algo

function consola (constructor:Function){
    console.log(constructor);
}

@consola
class Villano{
    constructor(public nombre:string){
    }
}

