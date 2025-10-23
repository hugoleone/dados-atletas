class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário"
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        } else {
            return "Sem Categoria"
        }
    }

    calculaIMC() { 
        let imc = this.peso / this.altura ** 2

        return imc
    }

    calculaMediaValida() {
        let soma = 0;
        this.notas.forEach(function (nota) {
            soma += nota
        })
        let media = soma / this.notas.length 
        return media
    }

    obtemNomeAtleta() {
        return `Nome: ${this.nome}`
    }

    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`
    }

    obtemPesoAtleta() {
        return `Peso: ${this.peso}`
    }

    obtemNotasAtleta() {
        return `Notas: ${this.notas}`
    }

    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria()}`
    }

    obtemIMC() {
        return `IMC: ${this.calculaIMC()}`
    }

    obtemMediaValida() {
        return `Média Válida: ${this.calculaMediaValida()}`
    }

}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
//Obs: a altura foi chamada assim, pois não foi solicitado o método de obterAltura na documentação da atividade.
console.log(atleta.altura)
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())

