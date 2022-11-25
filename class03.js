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
      this.#saldo += valor
      return this.#saldo
    }
  }
  retiro(valor) {
    // Verificación de la condición
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return this.#saldo
    }
  }
  verSaldo(valor) {
    return this.#saldo
  }
}

const cuentaCliente1 = new CuentaCorriente()

let saldo = cuentaCliente1.verSaldo()
console.log(`El saldo actual es: ${saldo}`)

cuentaCliente1.deposito(5000)
saldo = cuentaCliente1.verSaldo()
console.log(`El saldo actual es: ${saldo}`)

cuentaCliente1.retiro(450)
saldo = cuentaCliente1.verSaldo()
console.log(`El saldo actual es: ${saldo}`)

// El atributo protegido es Saldo y el programa funciona perfectamente retornando valores.

// Encapsulation (Encapsulamiento) - Encapsula, encierra dentro de sí su comportamiento y solo libera lo que necesitamos. 
