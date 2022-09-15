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

  // Tela com character
  const people = await swapiGet('people/')
  const peopleTotal = people.data.count
  const randomNum = Math.floor(Math.random() * peopleTotal)
  // console.log(randomNum)
  showChar(randomNum)
}


// preencherContadores()

async function showChar(num) {
  // Promise.all([
  //   swapiGet('people/1/')
  // ])
  // .then(function (result) {
  //   console.log('==>', result)
  
  //   luke.innerHTML = result[0].data.name
  // });

  // antes agt tinha pegado varias coisas, então suamos o promise, mas como aqui é uma coisa só, chamamos o swapiGet assim
  const response = await swapiGet(`people/${num}/`)

  text_1.innerHTML = response.data.name
  text_2.innerHTML = response.data.birth_year
  text_3.innerHTML = response.data.hair_color
  text_4.innerHTML = response.data.eye_color
  text_5.innerHTML = response.data.height + "cm"
  // queria colocar o planeta, mas n cosnegui, n sei como faz

  // console.log(response)
  
  img.setAttribute('src', `https://starwars-visualguide.com/assets/img/characters/${num}.jpg`)
  img.setAttribute('alt', `Character ${response.data.name} from Star Wars.`)
}

// function preencherContadores() {
//   Promise.all([
//     swapiGet('people/'),
//     swapiGet('planets/'),
//     swapiGet('vehicles/')
//   ])
//   .then(function (results) {
//     // const acct = results[0];
//     // const perm = results[1]);
//     // console.log('==>', results)
//     // isso aqui em cima foi pra gnt ver q o resultado qnd agt faz dessa forma vem os objestos num array, sendo o 0 o people e o 1 o vehicles. E esse results podia ser qqr palavra
//     teste_1.innerHTML = results[0].data.count
//     teste_2.innerHTML = results[1].data.count
//     teste_3.innerHTML = results[2].data.count
//   });
// }

// Criando uma função pra pegar o que tiver q pegar e usar o axios pra pegar isso na api. Passamos um "param" parametro pra ser oq vai ser pego lá, e nisso aplicamos a função nas situações. (obs.: pra isso precisamos por `` no lugar de '' dentro do axios.get(..))
// a função usando o axios dessa forma vai retornar o objeto referente ao parâmetro que agt der, com os seus dados
function swapiGet(param) {
  // usando o axios e colocando a url da api swapi
  // poderiam ser outros métodos, mas usamos get nesse exemplo
  // usamos a url base q é essa, então todas as reqs serão isso aí ../algumacoisaqagtquer/ (igual agt fez com o "people/1/" do exemplo pra entender) (tem q ter a barra no final, n sei pq)
  return axios
    .get(`https://swapi.dev/api/${param}`)
}

// ISSO AGT PEGOU DO GITHUB DO AXIOS

// axios.get(`https://swapi.dev/api/${param}`)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     return response.data
//     // o .data é pq no arquivo q vem as coisas q agt quer estão dentro do data
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

function backToStart() {
  document.body.classList.remove('box-2')
  document.body.classList.remove('box-3')
}

// FEATHER ICONS (Tinhamos colocado no html, mas como é script agt coloca aqui, n tem problema)
// tbm necessário pro feather icons, só jogar no google e ir no github q aparece q na parte do quick start ele mostra essas coisas
// pelo jeito só esse msm q teve q ficar aqui embaixo por ser um script msm
// feather.replace()
