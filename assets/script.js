// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Daniel Bickel" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let totes = 0 // Total?

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb



let qtyTotalDisplay = document.getElementById('qty-total')

let gbPlusBtn = document.getElementById('add-gb')
let gbMinusBtn = document.getElementById('minus-gb')
let gbQtyDisplay = document.getElementById('qty-gb')

gbPlusBtn.addEventListener('click', function() {
    gb++
    gbQtyDisplay.textContent = `${gb}`
    qtyTotalDisplay.textContent = `${gb + cc + sugar}`
})

gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {
    gb--
    gbQtyDisplay.textContent = `${gb}`
    qtyTotalDisplay.textContent = `${gb + cc + sugar}`
    }
})


let ccPlusBtn = document.getElementById('add-cc')
let ccMinusBtn = document.getElementById('minus-cc')
let ccQtyDisplay = document.getElementById('qty-cc')

ccPlusBtn.addEventListener('click', function() {
    cc++
    ccQtyDisplay.textContent = `${cc}`
    qtyTotalDisplay.textContent = `${gb + cc + sugar}`
})

ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
    cc--
    ccQtyDisplay.textContent = `${cc}`
    qtyTotalDisplay.textContent = `${gb + cc + sugar}`
    }
})


let sugarPlusBtn = document.getElementById('add-sugar')
let sugarMinusBtn = document.getElementById('minus-sugar')
let sugarQtyDisplay = document.getElementById('qty-sugar')

sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarQtyDisplay.textContent = `${sugar}`
    qtyTotalDisplay.textContent = `${gb + cc + sugar}`
})

sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0) {
    sugar--
    sugarQtyDisplay.textContent = `${sugar}`
    qtyTotalDisplay.textContent = `${gb + cc + sugar}`
    }
})


//qtyTotalDisplay.addEventListener('click', function() {
    //qtyTotalDisplay = 3
//)}




   
    







// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
//gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons