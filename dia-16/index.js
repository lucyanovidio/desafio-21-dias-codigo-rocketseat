const text_1 = document.querySelector('#text-1 span')
const text_2 = document.querySelector('#text-2 span')
const text_3 = document.querySelector('#text-3 span')
const text_4 = document.querySelector('#text-4 span')
const text_5 = document.querySelector('#text-5 span')
const img = document.querySelector('#img')

async function randomChar() {
  // Loading
  document.body.classList.add('box-2')
  setTimeout(() => {
    document.body.classList.remove('box-2')
    document.body.classList.add('box-3')
  }, 5000)

  // Character
  const people = await swapiGet('people/')
  const peopleTotal = people.data.count
  const randomNum = Math.floor(Math.random() * peopleTotal)
  showChar(randomNum)
}

async function showChar(num) {
  const response = await swapiGet(`people/${num}/`)

  text_1.innerHTML = response.data.name
  text_2.innerHTML = response.data.birth_year
  text_3.innerHTML = response.data.hair_color
  text_4.innerHTML = response.data.eye_color
  text_5.innerHTML = response.data.height + "cm"
  
  img.setAttribute('src', `https://starwars-visualguide.com/assets/img/characters/${num}.jpg`)
  img.setAttribute('alt', `Picture of the Star Wars character ${response.data.name}.`)
}

function swapiGet(param) {
  return axios
    .get(`https://swapi.dev/api/${param}`)
}

function backToStart() {
  document.body.classList.remove('box-2')
  document.body.classList.remove('box-3')
}
