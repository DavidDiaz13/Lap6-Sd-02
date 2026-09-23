// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
];

for (let i = 1; i <= 17; i++) {

    if (i === 3) {
        console.log(buzzWords[0])
    } else if (i === 5) {
        console.log(buzzWords[1])
    } else if (i === 7) {
        console.log(buzzWords[2])
    } else if (i === 11) {
        console.log(buzzWords[3])
    } else if (i === 13) {
        console.log(buzzWords[4])
    } else if (i === 17) {
        console.log(buzzWords[5])
    } else {
        console.log(i)
    }

}