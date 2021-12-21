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
    li.addEventListener("click", actionsToDisplayBookInfo)
    li.innerText = book.title
    li.id = book.id
    list.append(li)
  })
}

function hideElement(el) {
  // el.remove() 
  el.style.display = 'none' 
}

function actionsToDisplayBookInfo(event) {
  li = event.target
  hideElement(li.parentNode)
  
  const foundBook = arr.find(book => book.id === parseInt(li.id))

  displayBookInfo(foundBook)
}

function displayBookInfo(book) {
  const bookDiv = document.querySelector('.bookInfo')

  const h3Tag = document.createElement('h3')
  h3Tag.innerText = book.title

  const pTag = document.createElement('p')
  pTag.innerText = book.summary
 
  bookDiv.append(h3Tag, pTag)
}

function handleAddBookBtnClick(event) {
  // alert('Btn clicked')
  // we need display the form == removing the div display: none style
  document.getElementById('form').removeAttribute('style')
  
  dynamicallyAddFormImageInput()
  dynamicallyAddSubmitBtn()
}

function  dynamicallyAddFormImageInput(){
  // 1) create label
  const label = document.createElement('label')

  // 2) set attractibute
  label.htmlFor = 'image-url'
  label.innerText = 'Image URL'
  
  const input = document.createElement('input')
  input.id = 'imageURL'
  input.name = 'imageURL'
  input.type = 'text'

  // 3) get parent element
  const form = document.getElementById('book-form')

  // 4) attend to DOM
  // form.appendChild(label)
  // form.appendChild(input)
  form.append(label, input)
}


function dynamicallyAddSubmitBtn(){
  const input = document.createElement('input')
  input.type = 'submit'
  input.value = 'Add Book'
  const form = document.getElementById('book-form')
  form.append(input)
}

function handleFormSubmission(event) {
  // 1) check connection
  // alert('Form Submitted')

  // 2) prevent default actions
  event.preventDefault()
  // console.log('Form Submitted')

  // 3) grab user input
  // - helpful reference: https://www.javascripttutorial.net/javascript-dom/javascript-form/
  const form = document.getElementById('book-form');
  const formTitle = form.elements[0].value
  const formSummary = form.elements[1].value
  const formImgURL= form.elements[2].value
  // 4) display new info
  // a)remove / hide other content from the DOM
  // b) display now book in DOM

  //4a) remove info - COMPLETELY OFF DOM
  // document.getElementById('list').innerHTML = '' 
  // document.getElementById('list').remove()
  //4a) remove info - HIDDEN IN DOM
  document.getElementById('list').setAttribute('style', "display: none")
  document.getElementById('add-book-btn').setAttribute('style', "display: none")
  // document.getElementById('form').setAttribute('style', "display: none")

  // 4b) display the new book in DOM 
  const newBook = {
    'id': arr.slice(-1)[0].id + 1,
    'title': formTitle,
    'summary': formSummary,
    'image': formImgURL
  }

  displayBookInfo(newBook)
  // debugger

  // BONUS
  // 5) save / store input for later use 
  // 6) clear & hide form
  // 7) add back / view list
}

// BONUS
// code out Display List button functionality
// Update list

window.addEventListener('DOMContentLoaded', getData)

document.getElementById('add-book-btn').addEventListener('click', handleAddBookBtnClick)

document.addEventListener ('submit', handleFormSubmission)