# Documentação do utils.js

## Visão Geral
Este arquivo contém funções utilitárias para geração de dados aleatórios e impressão formatada.

## Constantes
- `NAMES`: Array com 30 nomes brasileiros comuns, alternando entre masculinos e femininos.

## Funções

### generateLoremIpsum(paragraphs = 1)
Gera texto Lorem Ipsum aleatório.
- **Parâmetros**: 
  - paragraphs (número): Quantidade de parágrafos desejada (padrão: 1)
- **Retorno**: String contendo o texto Lorem Ipsum gerado

### gets(type, range)
Gera dados aleatórios baseado no tipo especificado.
- **Parâmetros**:
  - type (string): Tipo de dado a ser gerado ('lorem', 'int', 'float', 'name', 'intlist', 'namelist')
  - range (número/string): Valor opcional para configurar o intervalo ou especificação
- **Tipos suportados**:
  - 'lorem': Gera Lorem Ipsum
  - 'int': Número inteiro aleatório
  - 'float': Número decimal aleatório
  - 'name': Nome aleatório (pode ser filtrado por 'male' ou 'female')
  - 'intlist': Array de números aleatórios
  - 'namelist': Array de nomes aleatórios
- **Retorno**: Número, string, array ou null dependendo do tipo solicitado
- **Exceções**: Lança erro quando range é obrigatório mas não fornecido para tipos de lista

### print(referencia, texto)
Imprime dados no console de forma formatada.
- **Parâmetros**:
  - referencia: Valor principal a ser impresso
  - texto (opcional): Texto adicional para impressão
- **Exceções**: Lança erro quando o parâmetro referencia é inválido

### not(value)
Nega o valor fornecido.
- **Parâmetros**:
  - value: Valor a ser negado
- **Retorno**: Boolean representando o valor negado

### pauseForKeypress()
Pausa a execução do programa e aguarda o usuário pressionar qualquer tecla.
- **Retorno**: Promise que resolve quando uma tecla é pressionada

### generateHeader(text, char = '-', width = 50)
Gera um cabeçalho com texto centralizado e linha de caracteres.
- **Parâmetros**:
  - text (string): Texto a ser exibido no cabeçalho
  - char (string): Caractere usado para a linha (padrão: '-')
  - width (número): Largura do cabeçalho (padrão: 50)

## Exportação
O módulo exporta as seguintes funções:
- gets
- print
- not
- pauseForKeypress
- generateHeader