// <!-- lembrar da ideia de ter algumas imagens na galeria, e a pessoa faz a pesquisa, e o valor da pesquisa dela é adicionado na url do src da img pelo js (será q tem como fazer isso sem que apareça várias imagens iguais? tentar) -->

const btn = document.querySelector('header i#btn')
const input = document.querySelector('input')
const mainGrid = document.querySelector('main .grid')
const lm_btn = document.querySelector('#load-more-btn')

let currentImgs = 0

btn.addEventListener('click', () => {
  imgSearch()
})

// Assim q faz a questão do enter, é sempre bom colocar isso. Mas eu ainda preciso aprender sobre esses tipos de evento que o elemento escuta e esse parâmetro event aí "e"
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    imgSearch()
  }
})

// function generateRandomDimensions() {
//   const dimensions = [
//     '2560x1440',
//     '1920x1080',
//     '1280x720',
//     '720x1080',
//     '1080x1920'
//   ]
//   return dimensions[Math.floor(Math.random() * dimensions.length)]
// }

// como fazer rpa n repetir a dimensão?

// function imgSearch() {
//   for (let i = 0; i < img.length; i++) {
//     img[i].setAttribute('src', `https://source.unsplash.com/${generateRandomDimensions()}/?${input.value}`)
//   }
// }

window.addEventListener('load', async () => {
  const response = await unsplashGet('nature')
  const images = []
  console.log(response)

  for (let i = 0; i < 9; i++) {
    images[i] = document.createElement('img')
    images[i].setAttribute('src', response.data.results[i].urls.raw)
    if(response.data.results[i].alt_description == null) {
      images[i].setAttribute('alt', 'Picture of something related to nature.')
    } else {
      images[i].setAttribute('alt', response.data.results[i].alt_description)
    }
    mainGrid.appendChild(images[i])
  }
})

// fazer tbm o botão do load more

async function imgSearch() {
  removeImages()

  const response = await unsplashGet(input.value)

  console.log(response)

  const images = []

  for (let i = 0; i < 9; i++) {
    images[i] = document.createElement('img')
    images[i].setAttribute('src', response.data.results[i].urls.raw)
    if(response.data.results[i].alt_description == null) {
      images[i].setAttribute('alt', 'Picture of something related to ' + input.value)
    } else {
      images[i].setAttribute('alt', response.data.results[i].alt_description)
    }
    mainGrid.appendChild(images[i])
    console.log(currentImgs)
  }
  currentImgs += 9
  console.log('final: ' + currentImgs)
  lm_btn.style.display = 'initial'
}

function removeImages() {
  mainGrid.innerHTML = ''
}

async function loadMore() {
  const response = await unsplashGet(input.value)

  const images = []

  for (let i = currentImgs; i < currentImgs + 9; i++) {
    images[i] = document.createElement('img')
    images[i].setAttribute('src', response.data.results[i].urls.raw)
    if(response.data.results[i].alt_description == null) {
      images[i].setAttribute('alt', 'Picture of something related to ' + input.value)
    } else {
      images[i].setAttribute('alt', response.data.results[i].alt_description)
    }
    mainGrid.appendChild(images[i])
    console.log(currentImgs)
  }
  currentImgs += 9

  if (currentImgs >= response.data.results.length) {
    lm_btn.style.display = 'none'
  }

  console.log('final: ' + currentImgs)
}

function unsplashGet(param) {
  return axios
    .get(`https://api.unsplash.com/search/photos/?query=${param}&per_page=27&client_id=VzpsY3RLssPEKAZ66sYxkQ6jh6n8kKycUdwGt-ErpN0`)
}

// Função pra mudar o tema pela hora que for
// e a forma como ele executou embaixo tbm é interessante

// function dayNightMode() {
//   const date = new Date()
//   const hour = date.getHours()

//   if (hour >= 7 && hour <= 18) {
//     document.body.style.backgroundColor = 'whitesmoke'
//     document.body.style.color = 'black'
//   } else {
//     document.body.style.backgroundColor = 'black'
//     document.body.style.color = 'white'
//   }
// }

// window.addEventListener('load', dayNightMode)

// Feather Icons
feather.replace()