// Importación de las clases
import {CuentaCorriente} from './CuentaCorriente.js'
import{Cliente} from './Cliente.js'

const cliente1 = new Cliente('Ximena','9909','1234567899')

const cuentaCliente1 = new CuentaCorriente(cliente1,'1','001')

console.log(`Cuenta de ${cliente1.nombreCliente}:`)
console.log(cuentaCliente1)

console.log('DEPOSITO')
let saldoCliente1 = cuentaCliente1.verSaldo()
console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)
saldoCliente1 = cuentaCliente1.deposito(5000)
console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)

// Código modularization (different files)

const cliente2 = new Cliente('Gerardo', '11011', '1234567811')

const cuentaCliente2 = new CuentaCorriente(cliente2,'2','002')


console.log(`Cuenta de ${cliente2.nombreCliente}:`)
console.log(cuentaCliente2)

console.log('DATOS ANTES DE LA TRANSFERENCIA')
let saldoCliente2 = cuentaCliente2.verSaldo()
console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)
console.log(`Saldo actual de ${cliente2.nombreCliente}: ${saldoCliente2}`)
console.log(`Transferencia de ${cliente1.nombreCliente} a ${cliente2.nombreCliente}`)

console.log('DATOS DESPUÉS DE LA TRANSFERENCIA')
cuentaCliente1.transferencia(100,cuentaCliente2)
saldoCliente1 = cuentaCliente1.verSaldo()
saldoCliente2 = cuentaCliente2.verSaldo()

console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)
console.log(`Saldo actual de ${cliente2.nombreCliente}: ${saldoCliente2}`)

console.log('GESTIÓN PRIVADA DE DATOS')
// Evitamos la modificación
console.log(cuentaCliente1.cliente)
console.log(cuentaCliente2.cliente)
console.log('GESTIÓN DE DATOS ESTÁTICOS')
console.log(`CANTIDAD DE CUENTAS REGISTRADAS ${CuentaCorriente.cantidadDeCuentas}`)

// NULL Y UNDEFINED
/**
 * UNDEFINED - Esta sin existir, no tener valores.
 * NULL - No existe pero es explícito. 
 * Toda variable sin valor, debe especificarse con null.
 */