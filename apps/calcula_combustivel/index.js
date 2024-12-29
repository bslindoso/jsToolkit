const { Carro } = require('./class/Carro');
const { Viagem } = require('./class/Viagem');


// Definição das constantes
const PRECO_GASOLINA = 6.30 // Preço por litro da gasolina

// Instância do veículo
const classic = new Carro('Chevrolet Classic LS 1.0 2013', 'Grafite', 10, 'Flex', 0.1)

// Instâncias das viagens
const maceio_LagoaAzeda = new Viagem('Maceió - Lagoa Azeda', 57)
const pauloAfonso_Palmeira_Maceio = new Viagem('Paulo Afonso - Palmeira dos Índios - Maceió', 340)
const pauloAfonso_Olivenca_Maceio = new Viagem('Paulo Afonso - Olivenca - Maceió', 357)

// Cálculos e impressão dos resultados
// Para cada trajeto, calcula o valor com e sem ar condicionado
maceio_LagoaAzeda.imprimeValorDaViagem(classic, PRECO_GASOLINA)
maceio_LagoaAzeda.imprimeValorDaViagem(classic, PRECO_GASOLINA, classic.aumentoArCondicionado)

pauloAfonso_Palmeira_Maceio.imprimeValorDaViagem(classic, PRECO_GASOLINA)
pauloAfonso_Palmeira_Maceio.imprimeValorDaViagem(classic, PRECO_GASOLINA, classic.aumentoArCondicionado)

pauloAfonso_Olivenca_Maceio.imprimeValorDaViagem(classic, PRECO_GASOLINA)
pauloAfonso_Olivenca_Maceio.imprimeValorDaViagem(classic, PRECO_GASOLINA, classic.aumentoArCondicionado)