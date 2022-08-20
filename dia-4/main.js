function insert(num) {
  let numero = document.querySelector('#resoult').innerHTML
  document.querySelector('#resoult').innerHTML = numero + num
}

// não podia ser "clear" por algum metodo do html (?)
function clean() {
  document.querySelector('#resoult').innerHTML = ''
}

function back() {
  let resoult = document.querySelector('#resoult').innerHTML
  // ele vai pegar o último dos que tem de length e vai tirar com a função substring
  document.querySelector('#resoult').innerHTML = resoult.substring(
    0,
    resoult.length - 1
  )
}

function calculate() {
  let resoult = document.querySelector('#resoult').innerHTML
  if (resoult) {
    // o eva já faz todos os calculos pra gente
    document.querySelector('#resoult').innerHTML = eval(resoult)
  } else {
    document.querySelector('#resoult').innerHTML = ''
  }
}

// COISAS QUE FALTARAM: Qnd eu termino um calculo dps q aperto =, o próximo numero que eui apertar, eu quero q apague o que tiver lá
