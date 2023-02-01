const firstScore = document.querySelector('#first-score')
const secScore = document.querySelector('#sec-score')
const firstOne = document.querySelector('#first-one')
const firstTwo = document.querySelector('#first-two')
const firstThree = document.querySelector('#first-three')
const secOne = document.querySelector('#sec-one')
const secTwo = document.querySelector('#sec-two')
const secThree = document.querySelector('#sec-three')
const btn = document.querySelector('.btn')

let num = 0
function incOne() {
    let firstOne = num += 1
    firstScore.innerText = firstOne
}
function incTwo() {
    let firstTwo = num += 2
    firstScore.innerText = firstTwo
}
function incThree() {
    let firstThree = num += 3
    firstScore.innerText = firstThree
}
function decOne() {
    let secOne = num += 1
    secScore.innerText = secOne
}
function decTwo() {
    let secTwo = num += 2
    secScore.innerText = secTwo
}
function decThree() {
    let secThree = num += 3
    secScore.innerText = secThree
}

function newGame() {
    num = 0
    if (num === 0) {
        secScore.innerText = num;
        firstScore.innerText = num;
    }
}

firstOne.addEventListener('click', incOne)
firstTwo.addEventListener('click', incTwo)
firstThree.addEventListener('click', incThree)
secOne.addEventListener('click', decOne)
secTwo.addEventListener('click', decTwo)
secThree.addEventListener('click', decThree)
btn.addEventListener('click', newGame)