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
  // Métodos
  deposito(valor) {
    this.saldo = (this.saldo) + valor;
  }
  retiro(valor) {
    this.saldo = (this.saldo) - valor;
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





