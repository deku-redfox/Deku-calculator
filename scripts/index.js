/**
 * VARIABLES
 */

const numbers = ['0','1','2','3','4','5','6','7','8','9']
const authorizedKeys = ['Backspace'].concat(numbers)
const operators = ['+', '-', '/', 'x']

let a;
let operator = ''
let previous = ''

let c = 2.25.toString();
const i = c.indexOf('.')
const d = c.substring(i)
console.log(2.25 * Math.pow(10, d.length - 1))

/**
 *  DOCUMENT ELEMENTS
 */

const button = document.querySelector('.row button')

    // Display element
const display = document.querySelector('.js-result');


/**
 * Listeners
 */

display.addEventListener('input', (e)=>{

    if (e.target.value === '')
        display.value = '0'

    if (numbers.find((val) => val === e.data)) {
       
        if (e.target.value === `0${e.data}`){
            display.value = e.data
        }
            
    }
})

display.addEventListener('keydown', (e)=>{
    
    if (!authorizedKeys.find((val) => val === e.key))
        e.preventDefault();

    if (e.key === '.')
        display.value = '.' + display.value

})

document.querySelectorAll('.js-number').forEach(item =>{
    item.addEventListener('click', ()=>{
        if (display.value === '0' || operators.find(op => op === previous))
            display.value = item.innerHTML;
        else {
                display.value += item.innerHTML;
        }
        
        previous = item.innerHTML

    })
})

document.querySelectorAll('.js-action').forEach(item => {
    item.addEventListener('click', () => {
        
        if (item.innerHTML === 'CE')
            clearE()

        if (item.innerHTML === 'C')
            clear()
    })
})

document.querySelectorAll('.js-operator').forEach(item =>{
    item.addEventListener('click', ()=>{

        if(a)
            a = getResult()
        else
            a = parseFloat(display.value)

        console.log(a)
        previous = item.innerHTML

        operator = item.innerHTML

    })
})

document.querySelector('.js-equal').addEventListener('click', ()=>{
    getResult()
    a = undefined;
})

window.addEventListener('resize', getBtnHeight)

/**
 *  on Init
 */

getBtnHeight()

/**
 * FUNCTIONS
 */

function getResult() {
    const b = parseFloat(display.value)
    if (!a) 
        a = 0;

    let result;

    switch (operator) {
        case 'x':
            result = a * b
            break
        case '/':
            result = a / b
            break
        case '-':
            result = a - b
            break
        default:
            result = a + b
    }
    display.value = `${result}`
    return result
}

function clearE() {
    const newStr = display.value.substring(0, display.value.length - 1)
    display.value = newStr
    display.value = display.value != '' & '0' 
}

function clear() {
    display.value = '0'
    a = 0
    operator = ''
    previous = ''
}
function getBtnHeight() {
    const btnWidth = button.clientWidth
    document.querySelectorAll('.row button').forEach(item => {
        item.style.setProperty('--ratioHg', btnWidth)
    })
}


