function insert(num) {
  let numero = document.querySelector('#resoult').innerHTML
  document.querySelector('#resoult').innerHTML = numero + num
}

function clean() {
  document.querySelector('#resoult').innerHTML = ''
}

function back() {
  let resoult = document.querySelector('#resoult').innerHTML
  document.querySelector('#resoult').innerHTML = resoult.substring(
    0,
    resoult.length - 1
  )
}

function calculate() {
  let resoult = document.querySelector('#resoult').innerHTML
  if (resoult) {
    document.querySelector('#resoult').innerHTML = eval(resoult)
  } else {
    document.querySelector('#resoult').innerHTML = ''
  }
}
