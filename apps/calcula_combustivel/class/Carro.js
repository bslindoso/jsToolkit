class Carro {
  marca;
  cor;
  gastoMedioCombustivel;
  tipoDeCombustivel;
  aumentoArCondicionado;

  constructor(marca = '', cor = '', gastoMedioCombustivel, tipoDeCombustivel, aumentoArCondicionado) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioCombustivel = gastoMedioCombustivel;
    this.tipoDeCombustivel = tipoDeCombustivel
    this.aumentoArCondicionado = aumentoArCondicionado
  }

  calculaValorGastoDoPercurso(distanciaPercorrida, precoCombustivel) {
    return ((distanciaPercorrida / this.gastoMedioCombustivel) * precoCombustivel)
  }

  calculaValorGastoDoPercursoComAr(distanciaPercorrida, precoCombustivel) {
    return ((distanciaPercorrida / this.gastoMedioCombustivel) * precoCombustivel) * (1 + this.aumentoArCondicionado)
  }
}

module.exports = { Carro }