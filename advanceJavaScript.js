// //* 1.JS Call Stack

// function one() {
//     return 1;
// }
// function two() {
//     return one() + one()
// }
// function three() {
//     return two() + one()
// }
// three()


//* 2. Synchronous Nature

// document.write("Hello ")
// document.write("Rohit ")
// document.write("How Are you")


//* 3. asynchronous Nature

// console.log("Hi ")
// setTimeout(() => {
//     console.log("Hello ")
// }, 2000)
// console.log("How Are you")


//* 4.Callback hell

// let h1 = document.querySelector('h1')
// function changeColor(color, delay, nextColor) {
//     setTimeout(() => {
//         h1.style.color = color
//         if (nextColor) nextColor()
//     }, delay)
// }
// changeColor("red", 2000, () => {
//     changeColor("green", 2000, () => {
//         changeColor("blue", 2000, () => {
//             changeColor("yellow", 2000, () => {
//                 changeColor("green", 2000, () => {
//                     changeColor("maroon", 2000)
//                 })
//             })
//         })
//     })
// })


//* 5. Promises

//? 1st example
// let h1 = document.querySelector('h1')
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (h1) {
//                 h1.style.color = color
//                 resolve(`Changed Color to ${color}`)
//             } else {
//                 reject(`Cannot change color`)
//             }
//         }, delay)
//     })
// }

// changeColor("red", 2000)
//     .then((result) => {
//         console.log('Promise resolved')
//         console.log("result: " + result)
//         return changeColor("green", 2000)
//     })
//     .then((result) => {
//         console.log('Promise resolved')
//         console.log("result: " + result)
//         return changeColor("pink", 2000)
//     })
//     .then((result) => {
//         console.log('Promise resolved')
//         console.log("result: " + result)
//         return changeColor("yellow", 2000)
//     })
//     .then((result) => {
//         console.log('Promise resolved')
//         console.log("result: " + result)
//         return changeColor("purple", 2000)
//     })
//     .then((result) => {
//         console.log('Promise resolved')
//         console.log("result: " + result)
//         return changeColor("maroon", 2000)
//     })


//? 2nd example
// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let speed = Math.floor(Math.random() * 10) + 1;
//         console.log(`Speed : ${speed}`)
//         if (speed > 1) {
//             resolve(`Success : Data Was Saved`)
//             console.log(`Data : ${data}`)
//         } else {
//             reject(`Data Was not Saved`)
//         }
//     })
// }

// saveToDb("Hello ROHIT")
//     .then((result) => {
//         console.log("Promise was Resolved")
//         console.log(result)
//         return saveToDb("Hello Raj")
//     })
//     .then((result) => {
//         console.log("Promise was Resolved")
//         console.log(result)
//         return saveToDb("Hello Rahul")
//     })
//     .then((result) => {
//         console.log("Promise was Resolved")
//         console.log(result)
//         return saveToDb("Hello Ravi")
//     })
//     .then((result) => {
//         console.log("Promise was Resolved")
//         console.log(result)
//         return saveToDb("Hello Ashish")
//     })

//? 3rd example
// function saveContact(name, contact) {
//     return new Promise((resolve, reject) => {
//         if (contact.toString().length > 9) {
//             resolve(`Name : ${name}\nNumber : ${contact}`)
//         } else {
//             reject("Failed : Wrong Number of Contact")
//         }
//     })
// }

// saveContact("Rohit Gupta", 8483982211)
//     .then((result) => {
//         console.log("Promise was resolved")
//         console.log("Success : The Contact Was Saved")
//         console.log(result)
//         return saveContact("Raj Gupta", 7998665111)
//     })
//     .then((result) => {
//         console.log("Promise was resolved")
//         console.log("Success : The Contact Was Saved")
//         console.log(result)
//         return saveContact("Rahul Gupta", 79986651)
//     })
//     .then((result) => {
//         console.log("Promise was resolved")
//         console.log("Success : The Contact Was Saved")
//         console.log(result)
//     })
//     .catch((reject) => {
//         console.log(reject)
//     })


//* 6. Async Function

//? 6.1 async keyword

//? normal Function
// async function greet() {
//     console.log("Hello")
// }
// let result = greet()
// console.log(result) //! log the promise state

//? arrow function
// let hello = async () => {
//     console.log("Async")
//     return 5;
// }
// console.log(hello()) //! log the promise state

//? 6.2 await keyword

// function getRandomNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1
//             console.log(num)
//             resolve()
//         }, 2000)
//     })
// }
// async function demo() {
//     console.log("start demo")
//     await getRandomNumber()
//     await getRandomNumber()
//     await getRandomNumber()
//     console.log("End demo")
// }
// demo()


//* Handling Rejections

// let h1 = document.querySelector('h1')
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         let num = Math.floor(Math.random() * 5) + 1
//         setTimeout(() => {
//             console.log(num)
//             if (num > 3) {
//                 reject("Promise rejected")
//             } else {
//                 h1.style.color = color
//                 resolve(`Color Changed to : ${color}`)
//                 console.log(`Color Changed to : ${color}`)
//             }
//         }, delay)
//     })
// }
// async function demo() {
//     try {
//         await changeColor("green", 2000)
//         await changeColor("red", 2000)
//         await changeColor("pink", 2000)
//     } catch (error) {
//         console.log("Error Caught : ", error)
//     }
// }
// demo()