
# Utilitários de Impressão no Console

Uma coleção de funções utilitárias para imprimir texto formatado no console.

## Funções

### `breakLine()`

Registra uma linha vazia no console.

**Exemplo:**

breakLine() 
// Gera uma linha vazia


### `header(textoDoHeader, preenchimento = 4)`

Imprime um cabeçalho com uma caixa de borda ao redor do texto.

**Parâmetros:**
- `textoDoHeader` (string): O texto a ser exibido no cabeçalho
- `preenchimento` (número, opcional): Número de espaços a serem adicionados em cada lado do texto. Padrão é 4.

**Exemplo:**

header('Bem-vindo')
/*
┌────Bem-vindo────┐
│    Bem-vindo    │
├────Bem-vindo────┤
*/


### `footer(textoDoFooter, preenchimento = 4)`

Imprime um rodapé com uma caixa de borda ao redor do texto.

**Parâmetros:**
- `textoDoFooter` (string): O texto a ser exibido no rodapé
- `preenchimento` (número, opcional): Número de espaços a serem adicionados em cada lado do texto. Padrão é 4.

**Exemplo:**

footer('Até Logo')
/*
├────Até Logo────┤
│    Até Logo    │
└────Até Logo────┘
*/


## Uso


import { breakLine, header, footer } from './printInConsole.mjs'

header('Meu App')
console.log('Algum conteúdo...')
footer('Fim')
