// No Funcional - Imperativo Steps

let name = "Roc";
let greeting = "Hi, I'm ";
console.log ( greeting + name );


// Funcional

function greet ( name ) {
	return "Hi, I'm " + name;
}

console.log ( greet( "Roc" ) );

// Funcion pura

function sumar (a, b) {
	return a + b;
}


// Side Effects

name = "Roc";

function greet2 ( ) {
	name = "Hacker";
	console.log ( "Hi, I'm " + name );
}

greet2();


// Higher Order Functions

function aplicarOperacion (a, b, operacion) {
	return operacion(a, b);
}

function multiplicar (a, b) {
	return a * b;
}

console.log(aplicarOperacion(3, 4, multiplicar));  



// No Mutation

const persona = { nombre: 'Juan', edad: 25 };
const nuevaPersona = { ...persona, edad: 26 }; 
console.log(nuevaPersona);  


const rooms = ["H1", "H2", "H3"];

const newRooms = rooms.map ( 
	function ( room ) {
		if (room == "H3") {
			return "H4" 
		} else {
			return room;
		}
	}
);

console.log ( rooms );
console.log ( newRooms );


