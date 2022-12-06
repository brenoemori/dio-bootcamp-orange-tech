/* 
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura,
    As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso/ (altura * altura));
    instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor do seu IMC
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc <= 18.5) {
            return("Status: Abaixo do peso") ; 
        } else if (imc <= 25) {
            return("Status: Peso normal") ;
        } else if (imc <= 30) {
            return("Status: Acima do Peso")
        } else if (imc <=40) {
            return("Status: Obesidade")
        } else {
            return("Status: Obesidade Grave!")
        }
    }

}



const jose = new Pessoa('José', 70, 1.75);
const renan = new Pessoa('Renan', 63, 1.75)
const breno = new Pessoa('Breno', 82, 1.8)


console.log(jose.calcularImc().toFixed(2), jose.classificarImc());
console.log(renan.calcularImc().toFixed(2), renan.classificarImc());
console.log(breno.calcularImc().toFixed(2), breno.classificarImc());