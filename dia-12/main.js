// tem q tem um "busca não encontrada" (tentei mas n consegui), sla, e eu tinha q fazer igual aquele da signal a pesquisa (tbm n consegui)

// const h3 = document.querySelector('h3')

// let searchBox = document.querySelector('#search-box')
// const imgsContainer = document.querySelector('.imgs-container')
const imgs = document.querySelectorAll('.imgs-container img')
// const footer = document.querySelector('footer')

const fullScreenImg = document.querySelector('.full-screen-img-container #full-screen-img')

const closeBtn = document.querySelector('.full-screen-img-container .container-2 button')

let i

// const gato = ['gatinho', 'cat']

// searchBox.oninput = () => {
//   imgs.forEach(hide => hide.style.display = 'none')
//   footer.style.display = 'none'

//   let value = searchBox.value

//   imgs.forEach(filter => {
//     let title = filter.getAttribute('data-title')

//     if(value == title) {
//       filter.style.display = 'block'
//       footer.style.display = 'block'
//       // h3.style.display = 'none'
//     } else if(value == '') {
//       filter.style.display = 'block'
//       footer.style.display = 'block'
//       // h3.style.display = 'none'
//     } 
//     // else {
//     //   h3.style.display = 'initial'
//     //   setTimeout(function time() {
//     //     h3.innerHTML = 'Pesquisa não encontrada.'
//     //   }, 1000)
//     // }
//   })
// }

function full(img) {
  document.body.classList.add('full-screen-img')
  fullScreenImg.src = img.src
  i = img.getAttribute('data-number')
}

function nextImg() {
  i++

  if(i > imgs.length - 1) {
    i = 0
  }

  // funcionou pq aquele selectorAll faz um array hahahahahaha
  fullScreenImg.src = imgs[i].src
}

function backImg() {
  i--

  // aqui tá só rolando o bugzinho pra voltar da primeira pra ultima, q tem q clicar no botão de back duas vezes
  if(i < 0) {
    i = imgs.length
  }

  fullScreenImg.src = imgs[i].src
}

// tentei com o onclick no botão lá no html e não funcionou, só assim, não me pergunte pq
closeBtn.addEventListener("click", function () {
  document.body.classList.remove('full-screen-img')
})