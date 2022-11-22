const a = 5
const n = 20

let result = 0

for (let i = a; i <= n; i++) {
        if(i % a == 0) {
            result = result + i
        }
} 
console.log(result)


