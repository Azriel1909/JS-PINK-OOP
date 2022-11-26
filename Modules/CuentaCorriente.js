export class CuentaCorriente {
  cliente
  numero
  agencia
  #saldo

  constructor() {
    this.cliente = null // Objeto del tipo de clase Cliente
    this.numero = ''
    this.agencia = ''
    this.#saldo = 0;
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