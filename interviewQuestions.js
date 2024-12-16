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

// function counterWithClosure(init) {
//     let initialValue = init
//     function increment() {
//         return ++init
//     }
//     function reset() {
//         return init = initialValue
//     }
//     function decrement() {
//         return --init
//     }

//     return { increment, decrement, reset }
// }

// let cc = counterWithClosure(5)
// console.log(cc.increment())
// console.log(cc.increment())
// console.log(cc.decrement())
// console.log(cc.reset())
// console.log(cc.increment())

//* Effective Answer
// function counterWithClosure(init) {
//     let initialValue = init
//     const functions = {
//         increment: function increment() {
//             return ++init
//         },
//         decrement: function decrement() {
//             return --init
//         },
//         reset: function reset() {
//             return init = initialValue
//         }
//     }
//     return functions
// }

// let cc = counterWithClosure(5)
// console.log(cc.increment())
// console.log(cc.increment())
// console.log(cc.decrement())
// console.log(cc.reset())
// console.log(cc.increment())


//* Find the Duplicate Numbers from array
// function findDuplicateNumbers(arr) {
//     console.time("Execution Time");
//     let DuplicateArr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 DuplicateArr.push(arr[j])
//             }
//         }
//     }
//     console.timeEnd("Execution Time");
//     console.log(DuplicateArr)
// }

// let arr = [1, 2, 1, 3, 4, 2, 5, 3]
// findDuplicateNumbers(arr)

//* Optimized Way
function findDuplicateNumbers(arr) {
    console.time("Execution Time");
    let DuplicateArr = new Set()
    let nonDuplicateArr = new Set()

    for (number of arr) {
        if (nonDuplicateArr.has(number)) {
            DuplicateArr.add(number)
        }
        nonDuplicateArr.add(number)
    }
    console.timeEnd("Execution Time");
    console.log("Duplicate : " + Array.from(DuplicateArr))
}
let arr = [1, 2, 1, 3, 4, 2, 5, 3]
findDuplicateNumbers(arr)