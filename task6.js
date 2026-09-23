// Refer to Task 6 in your Instructions to complete this task

let resultados = []

for (let i = 1; i <= 105; i++) {

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        resultados.push("FizzBuzzWoof")
    } else if (i % 3 === 0 && i % 5 === 0) {
        resultados.push("FizzBuzz")
    } else if (i % 3 === 0 && i % 7 === 0) {
        resultados.push("FizzWoof")
    } else if (i % 5 === 0 && i % 7 === 0) {
        resultados.push("BuzzWoof")
    } else if (i % 3 === 0) {
        resultados.push("Fizz")
    } else if (i % 5 === 0) {
        resultados.push("Buzz")
    } else if (i % 7 === 0) {
        resultados.push("Woof")
    } else {
        resultados.push(i)
    }
}

console.log(resultados)