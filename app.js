document.addEventListener("DOMContentLoaded",
    event => {
        console.log('doc is loaded')
    })

console.log('js start')

const addForm = document.forms['add-book']
const addFormInput = document.querySelector('#add-book-input')
const ulElement = document.querySelector('#book-list ul')
const hideElement = document.querySelector("#hide")

const searchBoxElement = document.querySelector("#search-books input")


searchBoxElement.addEventListener("input", event => {
    let searchValue = event.target.value.toLowerCase()
    filterBookList(searchValue)
})

function filterBookList(searchValue) {
    let list = document.querySelectorAll("#book-list ul li")
    Array.from(list).forEach(li => {
        if (li.querySelector(".name").textContent.toLowerCase().includes(searchValue)) {
            li.style.display = "block"
        } else {
            li.style.display = "none"
        }
    })
}





addForm.addEventListener('submit', event => {
    event.preventDefault()
    addBookElement(ulElement, addFormInput.value)
})

ulElement.addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        let lielement = event.target.parentElement
        ulElement.removeChild(lielement)
    }
})

hideElement.addEventListener("change", event => {
    console.log(event.target.id)
    if (event.target.checked == true) {

        ulElement.style.display = "none"
    } else {
        ulElement.style.display = "block"
    }
})




function addBookElement(listElement, bookname) {
    let bookElement = document.createElement('span')
    bookElement.textContent = bookname
    bookElement.classList.add("name")

    let delBtnElement = document.createElement('span')
    delBtnElement.textContent = 'delete'
    delBtnElement.classList.add("delete")


    let li = document.createElement('li')
    li.appendChild(bookElement)
    li.appendChild(delBtnElement)
    listElement.appendChild(li)
}