//! 27/11/2024

//* 1.Eval function

//? 1st
// let nums = "10" + 4
// console.log(nums)  //! return 104

//? 2nd
// let nums = "10" - 4
// console.log(nums) //! return 6

//? 3rd
// let nums = "10" * 4
// console.log(nums)  //! return 40

//? 4th
// let nums = "10" / 4
// console.log(nums)  //! return 2.5

//? 5th
// let nums = "10" + "4"
// console.log(nums)  //! return 104

//? 6th
// let nums = "10" - "4"
// console.log(nums)  //! return 6

//? 7th
// let nums = "10" * "4"
// console.log(nums)  //! return 40

//? 8th
// let nums = "10" / "4"
// console.log(nums)  //! return 2.5


//* 2. Set

//? nums array
// let nums = [1, 2, 2, 3, 4, 4, 5, 6, 5]
// let newNums = new Set(nums)
// console.log(newNums)

//? strings array
// let str = ["rohit", "raj", 'rohit']
// let newStr = new Set(str)
// console.log(newStr)

//? for string
// let name = "rrrohhit"
// let newName = new Set(name)
// console.log(newName)

//? objects array
// let details = [
//     {name : 'rohit', age : 23},
//     {name : 'raj', age : 21},
//     {name : 'rohit', age : 23},
// ]
// let newDetails = new Set(details)
// console.log(newDetails)


//* 3. For In Loop

//?
// let person = { fname: 'John', mname: 'Boss', lname: 'Doe' }
// let text = ""
// for (let x in person) {
//     text += person[x] + " "
// }
// console.log(text)


//?
// const numbers = [45, 4, 9, 56]
// let line = ''
// for (let x in numbers) {
//     line += numbers[x] + " "
// }
// console.log(line)  //! here the loop assumes index as a key and x as a value.


//* 4.Flatten array

// let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// // let flattenArray = nestedArray.flat()
// let flattenArray = nestedArray.flat(isFinite)
// // let flattenArray = nestedArray.flat()
// // let flattenArray = nestedArray.flat()
// console.log(flattenArray)


//* 5. IIFE

//? normal function
// (function hello() {
//     console.log("Hello")
// })();

// (function hi() {
//     console.log("Hello 2")
// })();

//? arrow function
// (() => {
//     console.log("Hello")
// })();

// ((name) => {
//     console.log("Hello2", name)
// })("Rohit");


//* 6. Hoisting in JS

//? Please refer the JavaScript Book For the Understanding Hoisting and You Can also refer to the Namaste JS by Akshay Saini ep 2
//? 1st Example
// var x = 7;
// function getName() {
//     console.log("Rohit")
// }
// getName()
// console.log(x)

//? 2nd Example
// getName()
// console.log(x)
// var x = 7;
// function getName() {
//     console.log("Rohit") //! print undefined here (because the value of x is undefined when we console it)
// }

//? 3rd Example
// var x = 7;
// function getName() {
//     console.log("Rohit")
// }
// getName()
// console.log(x)
// console.log(getName) //! print the whole function here

//* 7. Closures

//? Please refer the JavaScript Book For the Understanding Closures.
//? 1st Example
// function x() {
//     let a = 7
//     function y() {
//         console.log(a)
//     }
//     y()
// }
// x()

//? 2nd Example
// function x() {
//     let a = 7
//     function y() {
//         let b = 100
//         function z() {
//             console.log(a, b)
//         }
//         z()
//     }
//     y()
// }
// x()


//* Conditional 

//? 1. Ternary Operator
// const age = 15
// // let drive;
// // if (age >= 18) {
// //     drive = "Yes Drive"
// // } else {
// //     drive = "No Drive"
// // }

// const drive = age >= 18 ? "Yes Drive" : "No Drive";
// console.log(drive)

//? 2. logical operator
//? Logical AND (&&)
// console.log(true && true) //! return true
// console.log(true && false)  //! return false
// console.log(false && true)  //! return false
// console.log(false && false)  //! return false

//? Logical OR (||)
// console.log(true || true) //! return true
// console.log(true || false)  //! return false
// console.log(false || true)  //! return false
// console.log(false || false)  //! return false

//? Logical Not (!)
// console.log(!true) //! return false
// console.log(!false) //! return true
// console.log(!(true || false))  //! return false
// console.log(!(true && false)) //! return true


//? 3. Optional chaining
// let data = {
//     name: 'Rohit',
//     age: 23,
//     gender: "Male",
//     address: {
//         city: "Virar",
//         state: "Maharashtra"
//     }
// }
// let cityOfData = data?.address?.city
// console.log(cityOfData)