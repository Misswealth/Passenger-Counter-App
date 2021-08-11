
let countEl = document.getElementById("count-el")

console.log(countEl)

let saveBtn = document.getElementById("save-btn")

console.log(saveBtn)


let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    
}

function save() {
    console.log(count)
}

let welcomeEl = document.getElementById("welcome-el")

let name = "Miss Wealth Robert"

let greeting = "welcome back "

let welcomeMessage = greeting + name + "!"
welcomeEl.innerText = welcomeMessage

