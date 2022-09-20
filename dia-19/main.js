const btn = document.querySelector('header i#btn')
const input = document.querySelector('input')
const mainGrid = document.querySelector('main .grid')
const lm_btn = document.querySelector('#load-more-btn')

let currentImgs = 0

input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    imgSearch()
  }
})

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

async function imgSearch() {
  removeImages()

  const response = await unsplashGet(input.value)

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
  }
  currentImgs += 9
  
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
  }
  currentImgs += 9

  if (currentImgs >= response.data.results.length) {
    lm_btn.style.display = 'none'
  }
}

function unsplashGet(param) {
  return axios
    .get(`https://api.unsplash.com/search/photos/?query=${param}&per_page=27&client_id=VzpsY3RLssPEKAZ66sYxkQ6jh6n8kKycUdwGt-ErpN0`)
}

// Feather Icons
feather.replace()
