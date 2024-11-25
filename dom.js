//! 23/11/2024

let newSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGui-nzkPn4KAUAp6tiuQ9UsPCbTtZJsXEg&s"

//* 1.Selecting Elements

//? GetElementById
// let id = document.getElementById('title')
// id.style.color = 'red'

// let image = document.getElementById('img')
// console.dir(image)
// image.src = newSrc


//? getElementByClassName
// let li = document.getElementsByClassName('liItems')
// for (let i = 0; i < li.length; i++) {
//     li[i].style.color = "green"
// }
// li[0].style.color = "blue"

//? getElementByTagName
// let ul = document.getElementsByTagName('ul')
// for(let ulElements of ul){
//     ulElements.style.listStyle = "none"
// }

//? querySelector (select firstElement of that selector)
// let liElements = document.querySelector('.liItems')
// liElements.style.color = "green"

//? querySelectorAll (select all elements of that selector)
// let liElements = document.querySelectorAll('.liItems')
// liElements[2].style.color = 'blue'


//* 2.Setting Content in Object using properties and methods

// let paraGraph = document.querySelector('p')
// console.log(paraGraph.innerText)
// console.log(paraGraph.innerHTML)
// console.log(paraGraph.textContent)
// paraGraph.innerHTML = "<p>Hi, i am <b>Rohit Gupta</b> </p>"


//* 3. Manipulating Attributes

//? get the attributes
// let paraGraph = document.querySelector('.para')
// let att = paraGraph.getAttribute('class')
// console.log(att)

//? changing the className of attribute
// let setAtt = paraGraph.setAttribute('class', 'paragraphText')
// let att2 = paraGraph.getAttribute('class')
// console.log(att2)

//? seting the new id of attribute
// let setid = paraGraph.setAttribute('id', 'paragraphContent')
// let att3 = paraGraph.getAttribute('id')
// console.log(att3)


//* 4. Manipulating Style

// let links = document.querySelectorAll('a');
// for (let link of links) {
//     link.style.color = "red"
//     link.style.textDecoration = "none"
// }


//* 5. ClassList Properties

// let images = document.querySelector('img')
// let classList = images.classList
// console.log(images.classList.contains('all')) //! returns in boolean value
// images.classList.add('new')
// images.classList.remove('2nd')
// images.classList.toggle('2nd') //! if 2nd is not exist it will add or if exist it will remove it
// console.log(classList)


//* 6. Navigation

//? Properties
// let image = document.querySelector('ul')
// console.log(image.parentElement)
// console.log(image.children)
// console.log(image.nextElementSibling)
// console.log(image.previousElementSibling)
// console.log(image.childElementCount)

//? We can also to changes in Those All Element Also
// image.parentElement.style.fontStyle = "italic"
// image.children[2].style.color = 'red'
// image.nextElementSibling.style.fontSize = "30px"
// image.previousElementSibling.style.border = "1px solid red"


//* 7.Adding Elements

// let newPara = document.createElement('p')
// newPara.innerText = "New Paragraph"

//? appendChild
// let body = document.querySelector('body')
// body.appendChild(newPara)

//? append
// let btn = document.createElement('button')
// btn.innerText = "Click me"
// newPara.append(" ", btn)
// newPara.append(" New Append")

//? prepend
// let btn2 = document.createElement('button')
// btn2.innerText = "Button2"
// newPara.prepend(btn2)

//? insertAdjacent
// let span = document.createElement("span")
// span.innerText = "InnerAdjacent Content"
//? there are 4 types positions in the insertAdjacent
// newPara.insertAdjacentElement('beforebegin', span) //! at start above the object
// newPara.insertAdjacentElement('afterbegin', span) //! at start in same line
// newPara.insertAdjacentElement('afterend', span) //! at last below the object
// newPara.insertAdjacentElement('beforeend', span) //! at last in same line


//* 8.Removing Elements

//? removeChild
// let body = document.querySelector('body');
// let img = document.querySelector('img')
// body.removeChild(img)

//? remove()
// let body = document.querySelector('body');
// let img = document.querySelector('img')
// img.remove()
// body.remove()


//* 9.DOM Events

// function sayHello() {
//     alert('Hello')
// }

//? 1.OnClick Event
// let btn = document.querySelector('button');
// btn.onclick = (() => {
//     console.log("Btn was Clicked")
//     sayHello()
// })

//? 2.OnMouseEnter
// btn.onmouseenter = (() => {
//     console.log("mouseInside")
// })

//? 3.OnMouseLeave
// btn.onmouseleave = (() => {
//     console.log("MouseLeave")
// })

//? 4.addEventListener
//? this are keyboard Events
// document.addEventListener('keydown', () => {
//     console.log('key Press')
// })


//* 10.Events arguments
//? for keypress
// document.addEventListener('keypress', (e) => {
//     console.log(e)
// })

//? for mouseOver
// document.addEventListener('keypress', (e) => {
//     console.log(e)
// })

//* 11.Form Events

//? Submit and e.preventDefault
// let Form = document.querySelector('form')
// let body = document.querySelector('body')
// Form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let message = document.createElement('div')
//     message.textContent = "Form Submitted Successfully"
//     body.appendChild(message)
//     setTimeout(() => {
//         body.removeChild(message)
//     }, 3000)
// })

//* 12.Extracting Form Data
// let Form = document.querySelector('form')
// let User = document.getElementById('user')
// let Pass = document.getElementById('pass')
// console.log(User.value)

// Form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log("Username : ", User.value)
//     console.log("PassWord : ", Pass.value)
//     alert(`Hello ${User.value}, Your Password is ${Pass.value}`)
//     User.value = ""
//     Pass.value = ""
// })


//? accesing by the elements
// Form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.dir(Form)
//     console.log("Username : ", this.elements[0].value)
//     console.log("PassWord : ", this.elements[1].value)
//     alert(`Hello ${User.value}, Your Password is ${Pass.value}`)
//     User.value = ""
//     Pass.value = ""
// })

//* 13.Change Event

// User.addEventListener('change', () => {
//     console.log("Value Changed")
//     console.log("Final Value : ", User.value)
// })


//* 14.Input Event

// User.addEventListener('input', function() {   //! print undefined if we use Arrow Function here...
//     console.log(this.value)
// })

//* 15.MouseOut Event

// User.addEventListener('mouseout', function() {
//     console.log("Mouse Out")
// })


//* 16. KeyPress Event

// User.addEventListener('keypress', function () {
//     User.value = "Rohit"
//     console.log(this.value)
// })

//* 17. Scroll Event

// window.addEventListener('scroll', () => {
//     console.log(window.scrollY)
// })

//* 18.load event

// window.addEventListener('load', function () {
//     console.log("Fully Loaded")
// })

//* 19.DomContentLoaded event

// window.addEventListener('DOMContentLoaded', function () {
//     console.log("Dom Loaded")
// })