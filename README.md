# Sistema de Cadastro e Avaliação de Atletas

Este projeto implementa uma classe `Atleta` em **JavaScript**, que permite armazenar informações básicas de um atleta e realizar cálculos relacionados ao seu desempenho, como **IMC**, **média de notas** e **categoria etária**.

---

## Estrutura da Classe

A classe `Atleta` possui os seguintes atributos:

| Atributo | Tipo | Descrição |
|-----------|------|------------|
| `nome` | `string` | Nome do atleta |
| `idade` | `number` | Idade em anos |
| `peso` | `number` | Peso em quilogramas |
| `altura` | `number` | Altura em metros |
| `notas` | `array<number>` | Conjunto de notas atribuídas ao atleta |

---

## Métodos da Classe

### Cálculos Principais

#### `calculaCategoria()`
Retorna a categoria do atleta conforme sua idade:

| Faixa Etária | Categoria |
|---------------|------------|
| 9 a 11 anos | Infantil |
| 12 a 13 anos | Juvenil |
| 14 a 15 anos | Intermediário |
| 16 a 30 anos | Adulto |
| Fora das faixas acima | Sem Categoria |

---

#### `calculaIMC()`
Calcula o **Índice de Massa Corporal (IMC)** usando a fórmula:

**IMC = peso / (altura ** 2)**

---

#### `calculaMediaValida()`
Calcula a **média aritmética** das notas do atleta:

**média = soma das notas / quantidade de notas**

---

### Métodos de Obtenção de Dados

Cada método retorna uma string com o valor correspondente:

- `obtemNomeAtleta()` → `"Nome: <nome>"`
- `obtemIdadeAtleta()` → `"Idade: <idade>"`
- `obtemPesoAtleta()` → `"Peso: <peso>"`
- `obtemNotasAtleta()` → `"Notas: <array de notas>"`
- `obtemCategoria()` → `"Categoria: <categoria>"`
- `obtemIMC()` → `"IMC: <valor calculado>"`
- `obtemMediaValida()` → `"Média Válida: <valor calculado>"`

> Obs: A altura é acessada diretamente pelo atributo `atleta.altura`, conforme solicitado na documentação da atividade.

---

## Exemplo de Uso

```js
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.altura);
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());


# Como Executar

Execute o arquivo *dados-atletas.js* no terminal usando Node.js da seguinte forma:

+ node notas-atletas.js;

+ O resultado será exibido no console.


# Saída Esperada

Nome: Cesar Abascal
Idade: 30
Peso: 80
1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média Válida: 9.128

# Conceitos Aplicados

+ Programação Orientada a Objetos (POO)

++ Uso de classes e métodos

++ Aplicação de encapsulamento

+ Manipulação de arrays com forEach

+ Cálculo matemático básico (IMC e média)

+ Organização e boas práticas no código JavaScript


# Autor

**Hugo Souza**

+ Projeto de certificação 2 desenvolvido como exercício prático na Trilha 1 - Lógica de Programação, com foco em exercício prático de lógica e POO em JavaScript.
