const nombreCliente = 'Ximena'
const clienteID = '19131415'
const numCuenta = '12139415'
const saldoCuenta = 1000

// Crear molde (una clase - define instancias de objeto) de información con el nombre de las variables para todos los objetos.

// Crear una clase - Definir una clase

class Cliente {
  nombreCliente // Propiedades de la clase
  clienteID
  numCuenta
  saldoCuenta
}

const cliente1 = new Cliente(); // Creamos el primer objeto

cliente1.nombreCliente = 'PInkHat'
cliente1.clienteID = '191909'
cliente1.numCuenta = '123456789'
cliente1.saldoCuenta = 9000

// Llamamos a todos los atributos del objeto
console.log(cliente1)

const cliente2 = new Cliente(); // Instancia de la clase cliente

cliente2.nombreCliente = 'Rosal'
cliente2.clienteID = '181808'
cliente2.numCuenta = '123456788'
cliente2.saldoCuenta = 10000

console.log(cliente2)

const cliente3 = new Cliente(); // Instancia de la clase cliente

cliente3.nombreCliente = 'Dante'
cliente3.clienteID = '171707'
cliente3.numCuenta = '123456787'
cliente3.saldoCuenta = 11000

console.log(cliente3)


// COMPORTAMIENTOS DE LAS CLASES

// Clase = Molde datos que podemos replicar en instancias
// ! continue - > class01.js