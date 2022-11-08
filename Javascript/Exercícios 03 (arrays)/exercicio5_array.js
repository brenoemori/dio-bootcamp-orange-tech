// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//   Ex de lista = [2, 7, 3, 8, 10, 4]

const medias = [2, 7, 3, 8, 10, 4]

for (let i = 0; i < medias.length; i++) {
    const media = medias[i];
    if (media < 5 ) {
        console.log(`Aluno ${i} tirou a nota ${media} e está de recuperação`)
    } else {
        console.log(`Aluno ${i} tirou a nota ${media} e está aprovado`)
    }
}