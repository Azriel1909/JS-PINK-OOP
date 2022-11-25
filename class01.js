// Crear una clase - Definir una clase

class Cliente {
  nombreCliente // Propiedades de la clase
  clienteID
  rutCliente
}

class CuentaCorriente {
  numero
  saldo
  agencia

  deposito(valor) {
    this.saldo = (this.saldo) + valor;
    // this.saldo += valor
    // This define la cuenta corriente actual
  }
}

// COMPORTAMIENTOS DE LAS CLASES

// Clase = Molde datos que podemos replicar en instancias

const cliente1 = new Cliente()

cliente1.nombreCliente = 'Ximena'
cliente1.clienteID = '9909'
cliente1.rutCliente = '1234567899'

const cuentaCliente1 = new CuentaCorriente()

cuentaCliente1.numero = '12345678999'
cuentaCliente1.saldo = 9000
cuentaCliente1.agencia = 1000

// Abstracción : llevarse algo del mundo real a código, visualizar las cosas como clases y objetos.

console.log(cliente1)
console.log(cuentaCliente1)
cuentaCliente1.deposito(100)
console.log(cuentaCliente1)


// Atributos = asignación de valores a las variables
// Métodos para una clase = Comportamientos del objeto, funcionalidad de las clases

// Instancia = objeto de esa clase - creación del objeto a partir de la clase.


