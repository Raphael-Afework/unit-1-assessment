const add = document.getElementById("addition")
const sub = document.getElementById("subtraction")
const counterValue = document.getElementById("counter")
const inputNum = document.getElementById("number")

let numeric = 0

add.addEventListener("click", addNum)
sub.addEventListener("click", subNum)

function addNum() {
    numeric ++
    counterValue.innerHTML = numeric
}

function subNum() {
    numeric --
    counterValue.innerHTML = numeric
}