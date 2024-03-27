//document.getElementById("counter").innerText = 5
let saveEl = document.getElementById("save-el")
let counter = document.getElementById("counter")
let count = 0
function increment (){
    count +=1
    counter.textContent = count
}

function save (){
    let countStr = count + " - "
    saveEl.textContent += countStr
    counter.textContent = 0
    count = 0
    
}









