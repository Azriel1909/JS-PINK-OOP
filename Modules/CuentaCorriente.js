export class CuentaCorriente {
  numero
  #saldo
  agencia

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
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return this.#saldo
    }
  }
  verSaldo(valor) {
    return this.#saldo
  }
}