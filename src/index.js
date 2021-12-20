// Your code here
let arr;

function getData() {
  fetch('http://localhost:3000/books')
  .then(resp => resp.json())
  .then(data => {
    addContentToDom(data)
    arr = data
  })
}

function addContentToDom(info) {
  const list = document.getElementById("list")
  
  info.forEach(book => {
    const li = document.createElement('li')
    li.addEventListener("click", displayBookInfo)
    li.innerText = book.title
    li.id = book.id
    list.append(li)
  })
}

function displayBookInfo(event) {
  li = event.target
  li.parentNode.remove() 

  li.parentNode.style.display = 'none' 
  const foundBook = arr.find(book => book.id === parseInt(li.id))

  const bookDiv = document.querySelector('.bookInfo')

  const h3Tag = document.createElement('h3')
  h3Tag.innerText = foundBook.title

  const pTag = document.createElement('p')
  pTag.innerText = foundBook.summary
 
  bookDiv.append(h3Tag, pTag)
}

// debugger
window.addEventListener('DOMContentLoaded', getData)