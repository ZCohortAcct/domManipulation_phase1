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

}

function  dynamicallyAddFormImageInput(){
  // 1) create label
  // 2) set attractibute
  // 3) get parent element
  // 4) attend to DOM


}


function dynamicallyAddSubmitBtn(){

}

function handleForm(event) {
  // 1) check connection
  // 2) prevent default actions
  // 3) grab use input
  // 4) display new info
  // - remove / hide other content from the DOM
  // - helpful reference: https://www.javascripttutorial.net/javascript-dom/javascript-form/

  // BONUS
  // 5) save / store input for later use 
  // 6) clear & hide form
  // 7) add back / view list


 

}


// BONUS
// code out Display List button functionality
// Update list



// debugger
window.addEventListener('DOMContentLoaded', getData)
