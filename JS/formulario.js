// VARIABLES

const price = 200

let calculated = false;

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

const totalPrice = () => {
    if (!tickets || !category) return;

    const totalValue = price * tickets
    const discount = (totalValue/100) * categories[category].percent

    total = totalValue - discount
    totalTag.innerText = totalText + total
  }



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

    selected = index

    if (calculated && category) {
        totalPrice()}
}

const setTickets = (e) => {
    if (calculated) return;
    const {value} = e.target
    console.log(value)
    if(value < 0 || isNaN(value)){
    e.target.value = 0
    total = null
    return
    }
    tickets = value

    if (calculated && category) {
        totalPrice()}
}

const resetCategories = () => {
    if (calculated) return;
    total = null
    selected = null
    eventsAssignmentAll()
    totalTag.innerText = totalText
}

const reset = (e) => {
    e.preventDefault()
    console.log('Campos reseteados')

    for (let input of inputs)
    input.value = ''
    
    select.value = 'none'

    resetCategories()
}

const submit = (e) => {
    e.preventDefault()

    const {firstname, lastname, email, tickets, category} = form

    const verified = {
        firstname: firstname.value !== '', 
        lastname: lastname.value !== '', 
        email: email.value.includes('@'), 
        tickets: tickets.value > 0, 
        category: category.value !== 'none',
    }

    const values = Object.values(verified)
    const submitAccepted = values.every(value => value)
    console.log(submitAccepted)

    if(submitAccepted){
        totalPrice()
        alert ('El calculo de tus descuentos fue realizado con éxito!')
        calculated = true
    } else{
        alert ('Completa todos los campos')
    }

    setTimeout(() => {
        calculated = false;
      }, 1000);
}


// asignacion de eventos ----------------------------------------
form.category.addEventListener('change', setCategory)
form.tickets.addEventListener('change', setTickets)
form.tickets.addEventListener('keyup', setTickets)

resetBtn.addEventListener('click', reset)
submitBtn.addEventListener('click', submit)