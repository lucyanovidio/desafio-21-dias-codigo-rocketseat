const passwordBox = document.querySelector('#senha')
const uppercaseCheckbox = document.querySelector('#uppercase')
const lowercaseCheckbox = document.querySelector('#lowercase')
const numbersCheckbox = document.querySelector('#numbers')
const symbolsCheckbox = document.querySelector('#symbols')
const copyBtn = document.querySelector('#copy-btn')
const generateBtn = document.querySelector('#generate-btn')

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefgijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "'!@#$%¨&*()_-=+{}[]~^`"

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

function generatePassword() {
  let password = ""

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

  for(let i = password.length; i < 15; i++) {
    const x = generateX()
    password += x
  }

  passwordBox.innerHTML = password
} 

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

copyBtn.addEventListener("click", async () => {
  if(!passwordBox.innerHTML) {
    alert('Gere a senha.')
    return
  }
  
  await window.navigator.clipboard.writeText(passwordBox.innerHTML)
  alert('Senha copiada!')
})
