const passwordBox = document.querySelector('#senha')
const uppercaseCheckbox = document.querySelector('#uppercase')
const lowercaseCheckbox = document.querySelector('#lowercase')
const numbersCheckbox = document.querySelector('#numbers')
const symbolsCheckbox = document.querySelector('#symbols')
const copyBtn = document.querySelector('#copy-btn')
const generateBtn = document.querySelector('#generate-btn')

// Caracteres a serem utilizados 

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefgijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "'!@#$%¨&*()_-=+{}[]~^`"

// Funções para obter um caracter aleatório de cada variável de caracteres

function getUppercaseChar() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLowercaseChar() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumberChar() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbolChar() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// Função principal para gerar senha

function generatePassword() {
  let password = ""

  // Adicionando o caracter do respectivo checkbox se ele estiver checked

  if(uppercaseCheckbox.checked) {
    password += getUppercaseChar()
  }

  if(lowercaseCheckbox.checked) {
    password += getLowercaseChar()
  }

  if(numbersCheckbox.checked) {
    password += getNumberChar()
  }

  if(symbolsCheckbox.checked) {
    password += getSymbolChar()
  }

  // Definindo tamanho da senha e que os caracteres serão adicionados na senha aleatóriamente até esse tamanho máximo

  for(let i = password.length; i < 15; i++) {
    const x = generateX()
    password += x
  }

  // Escrevendo a senha na caixa

  passwordBox.innerHTML = password
} 

// ME PERDI QND ELE TROUXE ESSA FUNÇÃO AQUI

function generateX() {
  const xs = []

  if(lowercaseCheckbox.checked) {
    xs.push(getLowercaseChar())
  }

  if(uppercaseCheckbox.checked) {
    xs.push(getUppercaseChar())
  }

  if(numbersCheckbox.checked) {
    xs.push(getNumberChar())
  }

  if(symbolsCheckbox.checked) {
    xs.push(getSymbolChar())
  }

  if(xs.length === 0) return ""

  return xs[Math.floor(Math.random() * xs.length)]
}

generateBtn.addEventListener("click", generatePassword)

// Botão de copiar

copyBtn.addEventListener("click", async () => {
  if(!passwordBox.innerHTML) {
    alert('Gere a senha.')
    return
  }
  
  await window.navigator.clipboard.writeText(passwordBox.innerHTML)
  alert('Senha copiada!')
})