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


//* Adding Elements