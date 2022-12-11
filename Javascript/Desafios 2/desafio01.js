// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 


let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

let r = n;
let s = 0;
let x = 1;


if (n <= 2) { 

 print(n); 

} else {
    n--;
    for(; n > 0; n--){
      if(x == 1) {
        r = r * n;
      } else if (x == 2){
        r = Math.round(r / n);
      } else if (x == 3){
        r = r + n;
      } else if (x == 4){
        s += r;
        r = -n;
        x = 0;
      }
      if (n == 1 && x != 0){
        s += r;
      }
      x++;
    }
    print(s)
}

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".