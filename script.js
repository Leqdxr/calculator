const display = document.getElementById('display')
const key = document.querySelectorAll('.key')
const operator = document.querySelectorAll('.operator')
const clear = document.getElementById('clear')

let screenValue = ''

let value1 = 0
let value2 = 0

function add(value1,value2) {
    return value1 + value2
}

function subtract(value1,value2) {
    return value1 - value2
}

function multiply(value1,value2) {
    return value1 * value2
}

function divide(value1,value2) {
    if(value2 === 0) {
        return "Can't divide by 0"
    }
        return (value1 / value2).toFixed(2)
}


clear.addEventListener('click',() => {
    screenValue = ''
    display.innerHTML = ''
})

key.forEach( (number) => {
    number.addEventListener('click', (e) => {
        screenValue += e.target.innerHTML
        display.textContent = screenValue
    } )
} )

let result
let savedOperator = ''

operator.forEach( (op) => {
    op.addEventListener('click', (e) => {
        value1 = parseInt(display.innerHTML)
        if(isNaN(value1)) {
            value1 = 0
        }
        screenValue = ''
        savedOperator = e.target.innerHTML
    })
} )

const equal = document.getElementById('equal')
equal.addEventListener('click', ()=>{
    value2 = parseInt(screenValue)
    if (screenValue === '') {
        display.innerHTML = ''
        return
    }
    switch (savedOperator) {
    case '+':
        result = add(value1,value2)
        break;
    case '*':
        result = multiply(value1,value2)
        break;
    case '-':
        result = subtract(value1,value2)
        break;
    case '/':
        result = divide(value1,value2)
        break;
}
    display.innerHTML = result
    screenValue = ''
})