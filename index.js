
let countEl =  document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let refreshBtn = document.getElementById("refresh-btn")

let count = 0;
function increment(){
    count ++;
    countEl.textContent = count;
}

let temp = saveEl.textContent;
function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.innerText = 0;
    count = 0;
}

function refresh(){
    saveEl.textContent = temp;
    countEl.textContent = 0;
}

