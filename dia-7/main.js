const inc$ = document.querySelector('#inc')
const dec$ = document.querySelector('#dec')
const zero$ = document.querySelector('#zero')
const start$ = document.querySelector('#start')
const stop$ = document.querySelector('#stop')
const text$ = document.querySelector('#text')

let sec = 0
let min = 0

let interval

function twoDigits(digit) {
  if(digit < 10) {
    return('0' + digit)
  } else {
    return digit
  }
}

start$.addEventListener("click", function () {
  counter()
  interval = setInterval(counter, 1000)
})

function counter() {
  sec++
  if(sec == 60) {
    min++
    sec = 0
  }
  text$.innerHTML = twoDigits(min) + ":" + twoDigits(sec)
}

stop$.addEventListener("click", function () {
  clearInterval(interval)
  start$.innerHTML = "Retomar"
})

zero$.addEventListener("click", function () {
  sec = 0
  min = 0
  text$.innerHTML = "00:00"
  clearInterval(interval)
  start$.innerHTML = "Iniciar"
})

inc$.addEventListener("click", function () {
  sec++
  if(sec == 60) {
    min++
    sec = 0
  }
  text$.innerHTML = twoDigits(min) + ":" + twoDigits(sec)
})

dec$.addEventListener("click", function () {
  sec--
  if(sec == 60) {
    min--
    sec = 0
  }
  text$.innerHTML = twoDigits(min) + ":" + twoDigits(sec)
})
