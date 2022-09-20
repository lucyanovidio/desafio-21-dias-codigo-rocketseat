const btn = document.querySelector('header i#btn')
const input = document.querySelector('input')
const mainGrid = document.querySelector('main .grid')

input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    imgSearch()
  }
})

window.addEventListener('load', async () => {
  const response = await unsplashGet('nature')
  const images = []

  for (let i = 0; i < response.data.results.length; i++) {
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

  for (let i = 0; i < response.data.results.length; i++) {
    images[i] = document.createElement('img')
    images[i].setAttribute('src', response.data.results[i].urls.raw)
    if(response.data.results[i].alt_description == null) {
      images[i].setAttribute('alt', 'Picture of something related to ' + input.value)
    } else {
      images[i].setAttribute('alt', response.data.results[i].alt_description)
    }
    mainGrid.appendChild(images[i])
  }
}

function removeImages() {
  mainGrid.innerHTML = ''
}

function unsplashGet(param) {
  return axios
    .get(`https://api.unsplash.com/search/photos/?query=${param}&per_page=18&client_id=VzpsY3RLssPEKAZ66sYxkQ6jh6n8kKycUdwGt-ErpN0`)
}

// Feather Icons
feather.replace()
