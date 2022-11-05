const nota1 = 8;
const nota2 = 4;
const nota3 = 8;

const media = (nota1 + nota2 + nota3)/ 3;
console.log(`Média final : ${media.toFixed(1)}`)

if (media < 5) {
    console.log("Status: REPROVADO");
} else if (media <7) {
    console.log("Status: RECUPERAÇÃO");
} else {
    console.log("Status: APROVADO");
}

