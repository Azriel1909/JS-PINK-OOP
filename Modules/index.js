// Importación de las clases
import {CuentaCorriente} from './CuentaCorriente.js'

const cuentaCliente1 = new CuentaCorriente()

let saldo = cuentaCliente1.verSaldo()
console.log(`El saldo actual es: ${saldo}`)

cuentaCliente1.deposito(5000)
saldo = cuentaCliente1.verSaldo()
console.log(`El saldo actual es: ${saldo}`)

cuentaCliente1.retiro(450)
saldo = cuentaCliente1.verSaldo()
console.log(`El saldo actual es: ${saldo}`)

// Código modularization