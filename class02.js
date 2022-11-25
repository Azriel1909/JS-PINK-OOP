// Crear una clase - Definir una clase

class Cliente {
  nombreCliente // Propiedades de la clase
  clienteID
  rutCliente
}

class CuentaCorriente {
  numero
  #saldo
  agencia

  // Constructor (LO que normalmente se usa para la clase, comportamiento por defecto) - Ejecutadas al momento de crear instancias

  constructor() {
    this.#saldo = 0;
    this.numero = ''
    this.agencia = ''
  }

  // Métodos
  deposito(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }
  retiro(valor) {
    // Verificación de la condición
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log('La cantidad ha retirar rebasa a la cantidad de saldo actual.')
    }
  }
}

const cliente1 = new Cliente()

cliente1.nombreCliente = 'Ximena'
cliente1.clienteID = '9909'
cliente1.rutCliente = '1234567899'

const cuentaCliente1 = new CuentaCorriente()

cuentaCliente1.numero = '12345678999'
cuentaCliente1.saldo = 9000
cuentaCliente1.agencia = 1000

console.log(cuentaCliente1)
cuentaCliente1.retiro(100)
console.log(cuentaCliente1)


const cuentaCliente2 = new CuentaCorriente()
console.log(cuentaCliente2)
cuentaCliente2.deposito(100)
console.log(cuentaCliente2)
cuentaCliente2.retiro(500)
console.log(cuentaCliente2)

// Atributos privados
/**
 * # - Privado : No visible
 * ! https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields - Docs about Private Classes
*/