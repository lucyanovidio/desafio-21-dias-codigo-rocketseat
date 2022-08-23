// será q rola um temporizador tbm, tipo eui boto o tempo, e ele vai até o tempo q eu quero e toca o alarme?

// falta limitar o counter pra ele n ficar negativo
// falta tbm qnd ele chega nos 60min ele segue pra 61,62.. e como eu n setei hora, queria que ele parasse no 59:59

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

// isso é um alternativo pro "onclick"
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
  // text$.innerHTML = min + ":" + sec
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