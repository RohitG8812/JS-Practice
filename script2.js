//! 23/11/2024

//* Destructuring in Arrays

//? assign the variables to the array values
// let names = ['ashish', 'ravi', 'rahul', 'atish']
// console.log(names)
// let [winner, runnerUp] = names;
// console.log("Winner : " + winner)  //! return ashish
// console.log("Runner Up : " + runnerUp) //! return ravi

//? making variables by skipping middle values of an array
// let names = ['ashish', 'ravi', 'rahul', 'atish']
// let [winner, , , runnerUp] = names;
// console.log("Winner : " + winner) //! return ashish
// console.log("Runner Up : " + runnerUp)  //! return atish

//? using rest with destructuring
// let names = ['ashish', 'ravi', 'rahul', 'atish', 'rohit', 'raj']
// let [winner, , runnerUp, ...others] = names
// console.log("Winner : " + winner) //! return ashish
// console.log("Runner Up : " + runnerUp)  //! return atish
// console.log("Others : " + others)


//* Destructuring in objects

//? Destructuring in objects
// let studentInfo = {
//     name: "Rohit",
//     age: 23,
//     class: 15,
//     subjects: ['hindi', 'english', 'marathi', 'maths'],
//     username: 'rohit8812',
//     password: 123
// }

// let { username, password } = studentInfo
// console.log("Username : " + username)
// console.log("Password : " + password)

//? changing Variables name while Destructuring
// let studentInfo = {
//     name: "Rohit",
//     age: 23,
//     class: 15,
//     subjects: ['hindi', 'english', 'marathi', 'maths'],
//     username: 'rohit8812',
//     password: 123
// }

// let {username : user, password : pass} = studentInfo
// console.log("Username : " + user)
// console.log("Password : " + pass)


//? adding more variables at a time of destruction
// let studentInfo = {
//     name: "Rohit",
//     age: 23,
//     class: 15,
//     subjects: ['hindi', 'english', 'marathi', 'maths'],
//     username: 'rohit8812',
//     password: 123
// }

// let { username, password, city = "Mumbai" } = studentInfo
// console.log(city)


//! Next is DOM for that we create a new js file dom.js and index.html