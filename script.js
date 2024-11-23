//! 21/11/2024//

//* 1.Variables //

// let a = 37;
// let b = harry;
// console.log(typeof b)
// console.log(typeof a)

//* 2.primitive data types and its type //

// console.log(typeof null)
// console.log(typeof "John")
// console.log(typeof 33)
// console.log(typeof true)
// console.log(typeof 1234n)
// console.log(typeof x)
// console.log(typeof Symbol())

//* 3. Non-primitive data Types //

// console.log(typeof Array)
// console.log(typeof Object)

//? 3.1 Object //
// let data = {
//     name : "Rohit",
//     age : 23,
//     city : "Mumbai",
// }
// console.log("Data :", data)
// console.log(Data : ${JSON.stringify(data)})

//? accesing each objects
// console.log(data.name)
// console.log(data.age)
// console.log(data.city)

//? 3.2 Array //
// let arr = [1, 2, 3, 4, 5]
// let arr2 = [1, "two", true, 456n, 5]
// console.log(arr)
// console.log(arr2)

//? accesing each index of array
// console.log(typeof arr2[0])
// console.log(typeof arr2[1])
// console.log(typeof arr2[2])
// console.log(typeof arr2[3])
// console.log(typeof arr2[4])

//* 4.operators //
//? 4.1 ternary Operator

// let name = "rohit"
// console,log(name == "raj" ? true : false)

//? 4.2 logical operator

// let a = 2
// let b = 3
// console.log(a == 2 && b == 3)
// console.log(a == 2 && b == 5)
// console.log(a == 2 || b == 5)
// console.log(a == 3 || b == 5)
// console.log(!(a == 2))

//* 5. Prompt //

// function hello() {
//    prompt("Hello User")
// }
// hello()

//* 6. Conditional Statements //

// let name = "Rohit"
// let age = 22

//? 6.1 if Statement
// if(name == "Rohit"){
//     console.log("Hello Rohit")
// }

//? 6.2 if-else statement
// if(name == 'Rohit'){
//     console.log("Hello Rohit")
// } else {
//     console.log("Error")
// }

//? 6.3 if - else-if statement
// if(age <= 12){
//     console.log("You are child")
// } else if (age <= 18) {
//     console.log("You cannot drive")
// } else if (age >= 18) {
//     console.log("You can drive")
// }

//? 6.4 Switch Statement

//? 1st Example
// let age = 22;
// switch (true) {
//   case age <= 14:
//     console.log("You are child");
//     break;
//   case age < 18:
//     console.log("You Cannot drive");
//     break;
//   case age >= 18:
//     console.log("You Can Drive");
//     break;
// }

//? 2nd Example
// let color = "yellow";
// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "green":
//     console.log("Go");
//     break
//   case "yellow":
//     console.log("Wait");
//     break
//   default:
//     break;
// }

//* 7.Loops //
// 7.1 for loop
// let arr = [7, 2, 3, 4, 5]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

//? reverse order
// for(let i = arr.length-1; i >= 0; i--){
//     console.log(arr[i])
// }

//? 7.2 while loop
// let n = 5
// let i = 1
// while(i <= n){
//     console.log(i)
//     i++
// }

//? reverse
// let n = 1
// let i = 5
// while(i >= n){
//     console.log(i)
//     i--
// }

//? 7.3 do while loop
// let n = 5
// let i = 1
// do{
//     console.log(i)
//     i++
// } while (i<=n)

//? reverse
// let n = 1
// let i = 5
// do{
//     console.log(i)
//     i--
// } while(i >= n)

//? 7.4 for in loop

// let harry = "Harry"
// for(let i in harry){
//     console.log(harry[i])
// }

//? 7.5 for in loop (works with object)
// let data = {
//     harry : 60,
//     raj : 80,
//     rahul : 99,
//     rohit : 85
// }
// for(let a in data){
//     console.log("marks of " + a + " are " + data[a] + "%")
// }

//* 8. reverse a String //
// let name = "Rohit"

//? 1st Method
// let splitedName = name.split("")
// console.log(splitedName)
// let reverseOrder = splitedName.reverse()
// console.log(reverseOrder)
// let joinName = reverseOrder.join("")
// console.log(joinName)

//? 2nd Method
// function reverseName() {
//     let reverseName = name.split("").reverse().join("")
//     console.log(reverseName)
// }
// reverseName()

//? 3rd Method (using loop)
// function reverseName(){
//     let reverse = ""
//     for(let i = name.length-1; i >= 0; i--){
//         reverse += name[i]
//     }
//     console.log(reverse)
// }
// reverseName()

//* 9. reverse a number
// let number = 123
// let name = number.toString()

//?1st Method
// let splitedName = name.split("")
// console.log(splitedName)
// let reverseOrder = splitedName.reverse()
// console.log(reverseOrder)
// let joinName = reverseOrder.join("")
// let reverseNum = parseInt(joinName)
// console.log(reverseNum)

//? 2nd Method
// function reverseFunc(){
//     let reverseAll = name.split("").reverse().join("")
//     let Num = parseInt(reverseAll)
//     console.log(Num)
// }
// reverseFunc()

//? 3rd Method (using loop)
// function reverseName(){
//     let reverse = ""
//     for(let i = name.length-1; i >= 0; i--){
//         reverse += name[i]
//     }
//     let num = parseInt(reverse)
//     console.log(num)
//     console.log(typeof num)
// }
// reverseName()

//* 9. Functions //

// function cal(x, y) {
//     console.log(x + y)
// }
// cal(9, -2)

//* 10. Arrow Function //

// const calData = (x, y) => {
//     console.log(x + y)
// }
// calData(9, -2)

//* 11. Escape Sequence Characters //

// console.log("banana\"s") // for print ' or " is any word we need to use (\).

//* 12. Strings Properties and Methods //

// let name = "rohit";
// let name2 = 'gupta'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2, 4)) // print words from index 2 to 4 (4th index is not included)
// console.log(name.slice(2)) // print all words after the index 2
// console.log(name.replace("rohit", "raj")) // replace rohit with raj
// console.log(name.concat(" ", name2, " yes")) // joint name with name2 strings
// console.log(name.trim()) // remove all extra spaces from string

//* 13. Arrays properties and methods //

// let marks = [10, 9, 16, 20, 25];
// let marks2 = [1, 2, 3, 4];
// console.log(marks);
// console.log(marks.length); // returns the length of the array
// console.log(marks.toString()); // converts the array to a string
// console.log(marks.join("_")); // join the array elements together by _
// console.log("pop num :", marks.pop()); // remove the last element from the array
// console.log("after pop : ", marks);
// console.log("push index : ", marks.push(30)); // add the 30 to the last of an array
// console.log("after push : ", marks);
// console.log("shift num :", marks.shift()); // remove the first element from an array
// console.log("after shift : ", marks);
// console.log("unshift num :", marks.unshift(18)); // add the 18 to the start of an array
// console.log("after unshift : ", marks);
// console.log(delete marks[2]); //delete the 2nd index element from the array
// console.log("after delete : ", marks);
// console.log(marks.concat(marks2)); // join 2 arrays together
// console.log(marks.sort()); // sort the array
// console.log(marks.reverse()); // reverse the array
// console.log(marks.splice(3, 2, 40, 50)); // remove 2 elements from index 3 and add 40, 50 to that index
// console.log("after splice : ", marks);
// console.log(marks.slice(2, 5)); // return the elements between index 2 and 5

//* 14.  Using Loops with Array

// let num = [2, 3, 4, 5, 6]
// let name = "Harry"

//? 14.1 For Loop
// for(let i = 0; i < num.length; i++){
//     console.log(num[i] * 2)
// }

//? 14.2 for each loop
// num.forEach((i) => {
//     return console.log(i * i)
// })

//? 14.3 Array.from
// let arr = Array.from(name);
// console.log(arr)

//? 14.4 For of Loop
// for(let i of num){
//     console.log(i * i)
// }

//? 14.5 for in Loop
// for(let i in name){
//     console.log(name[i])
// }

//? 14.6 map method
// num.map((item, i) => {
//     console.log(item * i)
// })

//? 14.7 filter method
// let filtered = num.filter((item, i) => {
//     console.log(item > 5) // return boolean value here
//     return item > 5
// })
// console.log(filtered)

//? 14.8 reduce method
// let reduced = num.reduce((total, item) => {
//     return total += item
// })
// console.log(reduced)

//? 14.9 Some Method
// let arr = [1, 2, 3, 4]
// let some = arr.some((el) => (
//   el % 8 === 0
// ))
// console.log(some)

//? 14.10 every Method
// let arr = [1, 2, 3, 4]
// let arr = [4, 2, 6, 8]
// let every = arr.every((el) => (
//   el % 2 == 0
// ))
// console.log(every)


//* 15. nested Arrays

// let nums = [ [2, 4], [3, 6], [4, 8]]
// console.log(nums)
// console.log(nums[1])
// console.log(nums[1][0])

//* 16. break Keyword

// let i = 1;
// while (i <= 5) {
//     if (i == 3) {
//         break
//     }
//     console.log(i)
//     i++
// }

//* 17. Loops with nested arrays

//? 17.1 For in Loop
// let students = [
//   ["aman", 95],
//   ["rohit", 98],
//   ["raj", 99],
// ];
// for (let i = 0; i < students.length; i++) {
//   console.log(`Student ${i}`);
//   for (let j = 0; j < students[i].length; j++) {
//     console.log(students[i][j]);
//   }
// }

//? 17.2 For of loop
// let heroes = [
//   ["spiderman", "superman"],
//   ["thor", "wanda"],
// ];
// for(let list of heroes){
//     for(let hero of list){
//         console.log(hero)
//     }
// }

//* 18.Add/Update values of Objects

//? for simple objects
// let students = {
//     name : "rohit",
//     age : 23
// }
// console.log(students)
// students.gender = 'male'
// console.log(students)
// students.age = 25
// console.log(students)
// delete students.age
// console.log(students)

//? for Nested Objects
// let classInfo = {
//   rohit: {
//     grade: "A+",
//     class: 12,
//   },
//   prathamesh: {
//     grade: "B+",
//     class: 10,
//   },
//   rahul: {
//     grade: "C+",
//     class: 8,
//   },
// };
// console.log(classInfo)
// classInfo.rohit.gender = 'male'
// console.log(classInfo)
// classInfo.prathamesh.class = 13
// console.log(classInfo)
// delete classInfo.rahul.grade
// console.log(classInfo)

//* 19. Arrays of Objects

// let studentInfo = [
//   {
//     name: "Rohit",
//     age: 23,
//   },
//   {
//     name: "Rahul",
//     age: 21,
//   },
// ];
// console.log(studentInfo);
// studentInfo[1].name = "Rahul Gupta";
// console.log(studentInfo);
// studentInfo[0].gender = "male";
// console.log(studentInfo);
// delete studentInfo[0];
// console.log(studentInfo)

//* 20. Math object

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-30));
// console.log(Math.pow(2, 5));
// console.log(Math.floor(25.556655));
// console.log(Math.ceil(25.556655));
// console.log(Math.random());

//* 21. Generate a random number

// let randomNumber = Math.floor(Math.random() * 10000)
// console.log(randomNumber)

//* 22. Generate a random number between 20 to 30

// let randomNumber = Math.floor(Math.random() * 10) + 20
// console.log(randomNumber)

//*  23.Generate a random number between 2000 to 30000

// let randomNumber = Math.floor(Math.random() * 1000) + 2000;
// console.log(randomNumber)

//* 24. scope of function

// ? Function Scope
// ? 1st eg
// function calSum(a, b){
//     let sum = a + b
// }
// console.log(sum)   //! return an Error (Sum is not defined).
// calSum(2, 4)

// ? 2nd eg
// function calSum(){
//     console.log(sum)
// }
// let sum = 25
// calSum()

//? block-scope
// {
//     let a = 10
//     var b = 12
//     const c = 20
// }
// console.log(a)   //! return an Error (because of block scope)
// console.log(b)   //! return an value (because of var has global scope)
// console.log(c)  //! return an Error (because of block scope)

//? lexical-scope
// function outerFunc() {
//   function innerFunc() {
//     console.log(a);
//   }
//   innerFunc();
//   let a = 10;
// }
// outerFunc();

//* 25. Hoisting

// function outerFunc() {
//   console.log(a);
// }
// let a = 10;
// outerFunc();

//* 30. Function Expression

// let sum = function (a, b) {
//   console.log(a + b);
// };
// sum(10, 20);

//* 31. Higher Order Functions

//? Method 1
// function greet(func, n) {
//   for (let i = 0; i < n; i++) {
//     func();
//   }
// }
// let hello = function () {
//   console.log("Hello");
// };
// greet(hello, 5);

//? Method 2
// function oddEvenTest(request, n) {
//   if (request === "odd") {
//     let odd = () => {
//       console.log(!(n % 2 == 0));
//     };
//     return odd;
//   } else if (request === "even") {
//     let even = () => {
//       console.log(n % 2 == 0);
//     };
//     return even;
//   } else {
//     console.log("wrong request");
//   }
// }

// let request = "even";
// let n = 8
// let func = oddEvenTest(request, n);
// func();

//* 32. Methods

// const calculator = {
//     add(a, b){
//         return a + b
//     },
//     sub(a, b){
//         return a - b
//     },
//     mul(a, b){
//         return a * b
//     },
//     div(a, b){
//         return a / b
//     },
// }
// console.log(calculator.div(5, 20))

//* 33. this keyword

// const students = {
//   name: "Rohit",
//   age: 22,
//   eng: 95,
//   maths: 92,
//   getAvg() {
//     // let avg = (maths + eng) / 2;   //! return an Error (Maths is not defined) that's why we need to use this keyword
//     let avg = (this.maths + this.eng) / 2;
//     console.log(avg);
//   },
// };

//! return an Error Here because it will only work in students object not outside
// function getAvg(){
//     let avg = this.maths
//     console.log(avg)
// }
// students.getAvg();
// getAvg()

//* 34. try-catch block

// console.log("hello");
// try {
//   console.log(a);
// } catch (error) {
//   console.error("Error");
// }
// console.log("hi");

//* 35. SetTimeout()

// setTimeout(() => {
//     console.log("Hello")
// }, 2000);

//* 36. SetInterval()

// const greet = setInterval(() => {
//     console.log("hello")
// }, 1000);

//* 37. clearTimeout()

// const greet = setTimeout(() => {
//     console.log("Hello")
// }, 2000)
// clearTimeout(greet)

//* 38. clearInterval()

// const greet = setInterval(() => {
//   console.log("hello");
// }, 1000);

// setTimeout(() => {
//   clearInterval(greet);
//   console.log("Interval cleared");
// }, 5000);

//* 39. Callback function

// function greet() {
//   console.log("Hello")
// }
// function Outer() {
//   console.log("Outer")
//   setTimeout(() => {
//     greet()
//   }, 2000)
// }
// Outer()

//* 40. key for arrow functions

// const students = {
//   name : "Rohit",
//   marks : 45,
//   prop : this,
//   getName : function(){
//     console.log(this)
//     return this.name
//   },
//   getMarks : () => {
//     console.log(this)
//     return this.marks
//   }
// }
// students.getName()
// students.getMarks()

//? 2nd Scenario
// const students = {
//   getInfo1 : function () {
//     setTimeout(() => {
//       console.log(this)
//     }, 2000)
//   },
//   getInfo2 : function () {
//     setTimeout(function() {
//       console.log(this)
//     }, 2000)
//   }
// }
// students.getInfo1()
// students.getInfo2()

//* 41. Default Parameter

// function func(a, b = 2) {
//   console.log(a + b)
// }
// func(2, 5)

// function func2(a = 2, b){
//   console.log(a  + b)
// }
// func2(0)


//* 42.Spread

// let arr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(...arr)
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))

// let str = "ROHIT"
// console.log(...str)


//* 43. Spread with array literals

//? for array
// let arr = [1, 2, 3, 4, 5]
// let newArr = [...arr]
// newArr.push(6)
// console.log(newArr)
// console.log(arr)

//? for char
// let name = "ROHIT"
// let chars = [...name]
// console.log(chars)

//? individual access the elements of the array
// let str = ['rohit', 'raj', 'rahul', 'ravi']
// console.log(...str[3])

//? combine 2 arrays together
// let even = [2, 4, 6, 8]
// let odd = [1, 3, 5, 7]
// let newArr = [...even,...odd]
// console.log(newArr)

//* 43. Spread with object literals

//? copy the object into new object and add some more objects like here we add id
// let data = {
//   email: "ironman@gmail.com",
//   pass: 1234
// }
// let copyData = { ...data, id: 123 }
// console.log(copyData)

//? now we are creating a new object with the array
// let arr = [1, 2, 3, 4, 5]
// let arrObject = {...arr}
// console.log(arrObject)

//? for same as above we can create a new object from string also
// let str = "Rohit"
// let strObject = {...str}
// console.log(strObject)

//* Rest

// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log("You Gave Us : " + args[i]);
//   }
// }
// sum(2, 4, 6)

// function sum(){
//   let arr = [...arguments]
//   for (let i = 0; i < arr.length; i++){
//     console.log("You Gave Us : " + arr[i]);
//   }
// }
// sum(6, 7, 8)

function sum(msg, ...args){
  console.log(msg)
  return args.reduce((total, i) => (
    total += i
  ))
}
console.log(sum("Hello", 2, 4, 5, 6))