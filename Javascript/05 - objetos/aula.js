class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const breno = new Pessoa('Breno', 25);
const karen = new Pessoa('Karen', 26);

console.log(breno)


breno.descrever();
karen.descrever(); 

