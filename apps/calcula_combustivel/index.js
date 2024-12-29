const { Carro } = require('./class/Carro');
const { Viagem } = require('./class/Viagem');

// Instância do veículo
const CLASSIC = new Carro('Chevrolet Classic LS 1.0 2013', 'Grafite', 10, 'Flex', 0.1)

// USAGE:
// ======
// const PRECO_GASOLINA = 6.30 // Preço por litro da gasolina
// calculaCombustivel('Maceió - Lagoa Azeda', 57, PRECO_GASOLINA)
// calculaCombustivel('Maceió - Lagoa Azeda', 57, PRECO_GASOLINA, true)
// calculaCombustivel('Paulo Afonso - Palmeira dos Índios - Maceió', 340, PRECO_GASOLINA)
// calculaCombustivel('Paulo Afonso - Palmeira dos Índios - Maceió', 340, PRECO_GASOLINA, true)
// calculaCombustivel('Paulo Afonso - Olivenca - Maceió', 357, PRECO_GASOLINA)
// calculaCombustivel('Paulo Afonso - Olivenca - Maceió', 357, PRECO_GASOLINA, true)

/**
 * Creates a new Viagem (trip) instance and calculates the cost of the trip with or without air conditioning.
 *
 * @param {number} preco_gasolina - The price of gasoline per liter.
 * @param {string} nomePercurso - The name of the trip.
 * @param {number} kmPercurso - The distance of the trip in kilometers.
 * @param {boolean} comAr - Indicates whether the trip is made with air conditioning.
 * @returns {void} - This function does not return a value, it prints the cost of the trip.
 */
function calculaCombustivel(nomePercurso, kmPercurso, preco_gasolina, comAr) {
  const percurso = new Viagem(nomePercurso, kmPercurso)
  return (comAr) ? percurso.imprimeValorDaViagem(CLASSIC, preco_gasolina, CLASSIC.aumentoArCondicionado) : percurso.imprimeValorDaViagem(CLASSIC, preco_gasolina)
}

module.exports = { calculaCombustivel }