// Your code here
let arr;

function getData() {
  fetch('http://localhost:3000/books')
  .then(resp => resp.json()) //unwrapping burrito
  .then(data => {
    // console.log(data)
    addContentToDom(data)
    arr = data
  })
}

function addContentToDom(info) {
  // list out books in DOM under div#list

  // 1) find location in DOM
  // document.querySelector(#list)
  const list = document.getElementById("list")

  // 2) add conent to the DOM
  info.forEach(book => {
    const li = document.createElement('li')
    li.addEventListener("click", displayBookInfo)
    li.innerText = book.title
    li.id = book.id
    list.append(li)
    // debugger
  })
}

// display an indiviual book info
function displayBookInfo(event) {
  // add click ability line 23

  // check click listener works
  // console.log('click') // => alert('click')

  // add a way to ID element line 25

  //clear the DOM & display ONLY the attrs for the object that's clicked in div.bookInfo
  li = event.target
  li.parentNode.remove() // removes content from dom
  li.parentNode.style.display = 'none' // hides content
  
  // find the obj with the matching ID
  const foundBook = arr.find(book => book.id === parseInt(li.id))

 
  const bookDiv = document.querySelector('.bookInfo')

  const h3Tag = document.createElement('h3')
  h3Tag.innerText = foundBook.title

  const pTag = document.createElement('p')
  pTag.innerText = foundBook.summary
  
  // add the DOM
  // bookDiv.append(h3Tag)
  // bookDiv.append(pTag)
  bookDiv.append(h3Tag, pTag)
  // debugger
}

// document.addEventListener(‘DOMContentLoaded’, …)
window.addEventListener('DOMContentLoaded', getData)