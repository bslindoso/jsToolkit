class Viagem {
  percurso;
  distanciaEmKm;
  meioDeTransporte;

  constructor(percurso, distanciaEmKm, meioDeTransporte = 'Carro') {
    if (!percurso || typeof percurso !== 'string') throw new Error('Percurso inválido');
    if (!distanciaEmKm || distanciaEmKm <= 0) throw new Error('Distância inválida');

    this.percurso = percurso;
    this.distanciaEmKm = distanciaEmKm;
    this.meioDeTransporte = meioDeTransporte;
  }

  imprimeValorDaViagem(carro, precoGasolina, aumentoConsumoArCondicionado) {
    let valorGasto
    if (!aumentoConsumoArCondicionado) {
      valorGasto = carro.calculaValorGastoDoPercurso(this.distanciaEmKm, precoGasolina)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    } else {
      valorGasto = carro.calculaValorGastoDoPercursoComAr(this.distanciaEmKm, precoGasolina, aumentoConsumoArCondicionado)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
    console.log(
      `Valor gasto na viagem ${this.percurso}: ${valorGasto} ${(aumentoConsumoArCondicionado) ? 'com aumento de 10% no consumo pelo ar condicionado' : ''}`
    )
    return valorGasto
  }
}

module.exports = { Viagem }