import { Cliente } from "./Cliente.js"
export class CuentaCorriente {
  #cliente
  numero
  agencia
  #saldo
  static cantidadDeCuentas = 0
  // No puedo acceder a el nunca como this y se le atribuye el valor directo de la clase

  set cliente(valor) {
    if (valor instanceof Cliente){
      this.#cliente = valor
      // Protejo mi atributo privado
    }
  }

  get cliente() {
    return this.#cliente
  }

  constructor(cliente, numero, agencia) {
    this.cliente = cliente
    // this.#cliente = null // Objeto del tipo de clase Cliente
    this.numero = numero
    this.agencia = agencia
    this.#saldo = 0;
    CuentaCorriente.cantidadDeCuentas++; // En general
  }

  // Métodos
  deposito(valor) { // Dato primitivo 
    if (valor > 0) 
      this.#saldo += valor
    return this.#saldo
  }
  retiro(valor) {
    if (valor <= this.#saldo) 
      this.#saldo -= valor
    return this.#saldo
  }
  verSaldo() {
    return this.#saldo
  }
  transferencia(valor, cuentaDestino) {
    // Sacar de una cuenta a otra
    this.retiro(valor)
    cuentaDestino.deposito(valor) 
  }
}

// Parámetros Valor = Te pasa el valor, no la caja.
// Parámetros Objetos = (Arrays) Parámetros tipo referencia 