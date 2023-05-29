// VARIABLES

const cardsContainer = document.querySelectorAll('.btn.card');


const price = 200

const categories = {
    a:{percent: 80, value: '0'},
    b:{percent: 50, value: '0'},
    c:{percent: 15, value: '0'},
}

const totalText = 'Total a pagar: $'

let category = null
let tickets = null
let total = null

// DOM

const form = document.forms.formulario //FORMULARIO SELECCIONADO
const inputs = form.getElementsByTagName('input')
const select = form.getElementsByTagName('select')[0]

console.log(form)

console.log(inputs)

console.log(select)

const totalTag = document.getElementById('total')

const resetBtn = document.getElementById('reset')
const submitBtn = document.getElementById('submit')

// configuracion

form.className = 'container bg-white bg-opacity-75 p-4 rounded'

for(let tag of form){
     tag.classList.add('my-3')
}

totalTag.innerText = totalText

// FUNCIONES UTILITARIAS

const totalPrice = () => { //Funcion de cuenta

    if(!tickets || !category) return;

    const totalValue = price * tickets
    const discount = (totalValue / 100) * 10

    total = totalValue - discount


    totalTag.innerText = totalText + total
}

totalPrice()

// EVENTOS

const setCategory = (e) =>{
    const option = e.target.value
    console.log(option)

    if(option === 'none'){
        resetCategories()
        return
    }
    category = option
    const index = categories[category].value
    const container = cardsContainer[index]
    container.className = 'btn card m-0 ' + colors[index];
}

const setTickets = (e) => {
    const {value} = e.target
    console.log(value)
    if(value < 0 || isNaN(value)){
    e.target.value = 0
    total = null
    return}

    tickets = value
    totalPrice()
}

// EVENTOS DE BOTONES

const resetCategories = () => {
    total = null
    selected = null
    nulleventsAssignmentAll()
    totalTag.innerText = totalText
}

const reset = (e) => {
    e.preventDefault()
    console.log('Campos reseteados')

    for (let input of inputs)
    input.value = ''
    
    select.value = 'none'
}

const submit = (e) => {
    e.preventDefault()
    console.log('Informacion enviada')
}



form.category.addEventListener('change', setCategory)
form.tickets.addEventListener('change', setTickets)
form.tickets.addEventListener('keyup', setTickets)

resetBtn.addEventListener('click', reset)
form.addEventListener('submit', submit)