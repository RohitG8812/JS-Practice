//* 1.
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
// console.log(sum(2)(3)(4))


//* 2. (Counter with closures) Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// function Closures(n) {
//     return function () {
//         return n++
//     }
// }
// let customCounter = Closures(10)
// console.log(customCounter())
// console.log(customCounter())
// console.log(customCounter())
// console.log(customCounter())

//* 3. Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//* The three functions are:
//* increment() increases the current value by 1 and then returns it.
//* decrement() reduces the current value by 1 and then returns it.
//* reset() sets the current value to init and then returns it.

function counterWithClosure(init) {
    let initialValue = init
    function increment() {
        return ++init
    }
    function reset() {
        return init = initialValue
    }
    function decrement() {
        return --init
    }

    return { increment, decrement, reset }
}

let cc = counterWithClosure(10)
console.log(cc.increment())
console.log(cc.increment())
console.log(cc.decrement())
console.log(cc.reset())
console.log(cc.increment())