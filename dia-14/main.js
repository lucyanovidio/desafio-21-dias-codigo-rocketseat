// PEGANDO OS ELEMENTOS HTML

// Caixas pra mudar de tela
const box1 = document.querySelector('section#box-1')
const box2 = document.querySelector('section#box-2')
const box3 = document.querySelector('section#box-3')

// Enunciado
let h4$ = document.querySelector('#box-2 h4')
// Alternativas
let a$ = document.querySelector('#box-2 #a span:nth-child(2)')
let b$ = document.querySelector('#box-2 #b span:nth-child(2)')
let c$ = document.querySelector('#box-2 #c span:nth-child(2)')
let d$ = document.querySelector('#box-2 #d span:nth-child(2)')

// Buttons
const backBtn = document.querySelector('#box-2 .buttons .back-btn')
const nextBtn = document.querySelector('#box-2 .buttons .next-btn')

// Answers
const h4$1 = document.querySelector('#box-3 #answers #answer-1 h4')
const answer1 = document.querySelector(
  '#box-3 #answers #answer-1 .player-answer span'
)
const correct1 = document.querySelector(
  '#box-3 #answers #answer-1 .correct-answer span'
)

const h4$2 = document.querySelector('#box-3 #answers #answer-2 h4')
const answer2 = document.querySelector(
  '#box-3 #answers #answer-2 .player-answer span'
)
const correct2 = document.querySelector(
  '#box-3 #answers #answer-2 .correct-answer span'
)

const h4$3 = document.querySelector('#box-3 #answers #answer-3 h4')
const answer3 = document.querySelector(
  '#box-3 #answers #answer-3 .player-answer span'
)
const correct3 = document.querySelector(
  '#box-3 #answers #answer-3 .correct-answer span'
)

const h4$4 = document.querySelector('#box-3 #answers #answer-4 h4')
const answer4 = document.querySelector(
  '#box-3 #answers #answer-4 .player-answer span'
)
const correct4 = document.querySelector(
  '#box-3 #answers #answer-4 .correct-answer span'
)

const h4$5 = document.querySelector('#box-3 #answers #answer-5 h4')
const answer5 = document.querySelector(
  '#box-3 #answers #answer-5 .player-answer span'
)
const correct5 = document.querySelector(
  '#box-3 #answers #answer-5 .correct-answer span'
)

// Pontuação final
let h2$ = document.querySelector('#box-3 header h2')
let rating = document.querySelector('#box-3 header p#rating span')

// PARA O JS

// VARIÁVEIS DAS PERGUNTAS

const q1 = '1) Qual tag HTML é usada para fazer listas ordenadas?'
const q2 = '2) Sobre acessibilidade, qual o atributo HTML usado para texto alternativo de uma imagem?'
const q3 = '3) A propriedade CSS "justify-content" é utilizada em conjunto com qual propriedade de display?'
const q4 = '4) HTML e CSS são, respectivamente, linguagens de...?'
const q5 = '5) Qual desses seletores possui maior especificidade?'

// VARIÁVEIS DAS RESPOSTAS

const a1 = 'ol'
const b1 = 'ul'
const c1 = 'a'
const d1 = 'li'

const a2 = 'src'
const b2 = 'alt'
const c2 = 'required'
const d2 = 'href'

const a3 = 'block'
const b3 = 'none'
const c3 = 'flex'
const d3 = 'inline'

const a4 = 'Programação e estilo'
const b4 = 'Estilo e marcação'
const c4 = 'Marcação e programação'
const d4 = 'Marcação e estilo'

const a5 = 'body p'
const b5 = '.container p'
const c5 = '#box .container p'
const d5 = 'body #box p#text'

// CONTADORES PARA O RESULTADO

let i$q = 0

let i$a1 = 0
let i$b1 = 0
let i$c1 = 0
let i$d1 = 0

let i$a2 = 0
let i$b2 = 0
let i$c2 = 0
let i$d2 = 0

let i$a3 = 0
let i$b3 = 0
let i$c3 = 0
let i$d3 = 0

let i$a4 = 0
let i$b4 = 0
let i$c4 = 0
let i$d4 = 0

let i$a5 = 0
let i$b5 = 0
let i$c5 = 0
let i$d5 = 0

// CONTADORES PARA SOMA FINAL

let q$1
let q$2
let q$3
let q$4
let q$5

let total

//  RESPOSTAS DA PESSOA

let answer$1
let answer$2
let answer$3
let answer$4
let answer$5


// FUNÇÃO PRA COMEÇAR O QUIZ

function startQuiz() {
  document.body.classList.add('box-2')

  h4$.innerHTML = q1
  a$.innerHTML = a1
  b$.innerHTML = b1
  c$.innerHTML = c1
  d$.innerHTML = d1

  i$q = 1

  nextBtn.innerHTML = 'Próxima'

  console.log(q$1, q$2, q$3, q$4, q$5, total)
}

// FUNÇÕES PARA CADA QUESTÃO SER MARCADA E COMPUTADA

function a() {
  if ((box2.classList = ' ')) {
    box2.classList.add('a')
  } else {
    box2.classList.remove('b')
    box2.classList.remove('c')
    box2.classList.remove('d')
  }

  if (i$q == 1) {
    if ((i$b1 == 0) & (i$c1 == 0) & (i$d1 == 0)) {
      i$a1 = 1
    } else {
      i$a1 = 1
      i$b1 = 0
      i$c1 = 0
      i$d1 = 0
    }
  } else if (i$q == 2) {
    if ((i$b2 == 0) & (i$c2 == 0) & (i$d2 == 0)) {
      i$a2 = 1
    } else {
      i$a2 = 1
      i$b2 = 0
      i$c2 = 0
      i$d2 = 0
    }
  } else if (i$q == 3) {
    if ((i$b3 == 0) & (i$c3 == 0) & (i$d3 == 0)) {
      i$a3 = 1
    } else {
      i$a3 = 1
      i$b3 = 0
      i$c3 = 0
      i$d3 = 0
    }
  } else if (i$q == 4) {
    if ((i$b4 == 0) & (i$c4 == 0) & (i$d4 == 0)) {
      i$a4 = 1
    } else {
      i$a4 = 1
      i$b4 = 0
      i$c4 = 0
      i$d4 = 0
    }
  } else if (i$q == 5) {
    if ((i$b5 == 0) & (i$c5 == 0) & (i$d5 == 0)) {
      i$a5 = 1
    } else {
      i$a5 = 1
      i$b5 = 0
      i$c5 = 0
      i$d5 = 0
    }
  }

  console.log(i$a1 + ' ' + i$b1 + ' ' + i$c1 + ' ' + i$d1)
}

function b() {
  if ((box2.classList = ' ')) {
    box2.classList.add('b')
  } else {
    box2.classList.remove('a')
    box2.classList.remove('c')
    box2.classList.remove('d')
  }

  if (i$q == 1) {
    if ((i$a1 == 0) & (i$c1 == 0) & (i$d1 == 0)) {
      i$b1 = 1
    } else {
      i$b1 = 1
      i$a1 = 0
      i$c1 = 0
      i$d1 = 0
    }
  } else if (i$q == 2) {
    if ((i$a2 == 0) & (i$c2 == 0) & (i$d2 == 0)) {
      i$b2 = 1
    } else {
      i$b2 = 1
      i$a2 = 0
      i$c2 = 0
      i$d2 = 0
    }
  } else if (i$q == 3) {
    if ((i$a3 == 0) & (i$c3 == 0) & (i$d3 == 0)) {
      i$b3 = 1
    } else {
      i$b3 = 1
      i$a3 = 0
      i$c3 = 0
      i$d3 = 0
    }
  } else if (i$q == 4) {
    if ((i$a4 == 0) & (i$c4 == 0) & (i$d4 == 0)) {
      i$b4 = 1
    } else {
      i$b4 = 1
      i$a4 = 0
      i$c4 = 0
      i$d4 = 0
    }
  } else if (i$q == 5) {
    if ((i$a5 == 0) & (i$c5 == 0) & (i$d5 == 0)) {
      i$b5 = 1
    } else {
      i$b5 = 1
      i$a5 = 0
      i$c5 = 0
      i$d5 = 0
    }
  }
  console.log(i$a1 + ' ' + i$b1 + ' ' + i$c1 + ' ' + i$d1)
}

function c() {
  if ((box2.classList = ' ')) {
    box2.classList.add('c')
  } else {
    box2.classList.remove('q')
    box2.classList.remove('b')
    box2.classList.remove('d')
  }

  if (i$q == 1) {
    if ((i$a1 == 0) & (i$b1 == 0) & (i$d1 == 0)) {
      i$c1 = 1
    } else {
      i$c1 = 1
      i$a1 = 0
      i$b1 = 0
      i$d1 = 0
    }
  } else if (i$q == 2) {
    if ((i$a2 == 0) & (i$b2 == 0) & (i$d2 == 0)) {
      i$c2 = 1
    } else {
      i$c2 = 1
      i$a2 = 0
      i$b2 = 0
      i$d2 = 0
    }
  } else if (i$q == 3) {
    if ((i$a3 == 0) & (i$b3 == 0) & (i$d3 == 0)) {
      i$c3 = 1
    } else {
      i$c3 = 1
      i$a3 = 0
      i$b3 = 0
      i$d3 = 0
    }
  } else if (i$q == 4) {
    if ((i$a4 == 0) & (i$b4 == 0) & (i$d4 == 0)) {
      i$c4 = 1
    } else {
      i$c4 = 1
      i$a4 = 0
      i$b4 = 0
      i$d4 = 0
    }
  } else if (i$q == 5) {
    if ((i$a5 == 0) & (i$b5 == 0) & (i$d5 == 0)) {
      i$c5 = 1
    } else {
      i$c5 = 1
      i$a5 = 0
      i$b5 = 0
      i$d5 = 0
    }
  }
  console.log(i$a1 + ' ' + i$b1 + ' ' + i$c1 + ' ' + i$d1)
}

function d() {
  if ((box2.classList = ' ')) {
    box2.classList.add('d')
  } else {
    box2.classList.remove('a')
    box2.classList.remove('b')
    box2.classList.remove('c')
  }

  if (i$q == 1) {
    if ((i$a1 == 0) & (i$b1 == 0) & (i$c1 == 0)) {
      i$d1 = 1
    } else {
      i$d1 = 1
      i$a1 = 0
      i$b1 = 0
      i$c1 = 0
    }
  } else if (i$q == 2) {
    if ((i$a2 == 0) & (i$b2 == 0) & (i$c2 == 0)) {
      i$d2 = 1
    } else {
      i$d2 = 1
      i$a2 = 0
      i$b2 = 0
      i$c2 = 0
    }
  } else if (i$q == 3) {
    if ((i$a3 == 0) & (i$b3 == 0) & (i$c3 == 0)) {
      i$d3 = 1
    } else {
      i$d3 = 1
      i$a3 = 0
      i$b3 = 0
      i$c3 = 0
    }
  } else if (i$q == 4) {
    if ((i$a4 == 0) & (i$b4 == 0) & (i$c4 == 0)) {
      i$d4 = 1
    } else {
      i$d4 = 1
      i$a4 = 0
      i$b4 = 0
      i$c4 = 0
    }
  } else if (i$q == 5) {
    if ((i$a5 == 0) & (i$b5 == 0) & (i$c5 == 0)) {
      i$d5 = 1
    } else {
      i$d5 = 1
      i$a5 = 0
      i$b5 = 0
      i$c5 = 0
    }
  }
  console.log(i$a1 + ' ' + i$b1 + ' ' + i$c1 + ' ' + i$d1)
}

// FUNÇÃO PRA PRÓXIMA QUESTÃO

function next() {
  if (i$q == 1) {
    if ((i$a1 == 0) & (i$b1 == 0) & (i$c1 == 0) & (i$d1 == 0)) {
      alert('Marque alguma alternativa.')
      return
    }

    h4$.innerHTML = q2
    a$.innerHTML = a2
    b$.innerHTML = b2
    c$.innerHTML = c2
    d$.innerHTML = d2

    i$q = 2

    box2.classList.remove('a')
    box2.classList.remove('b')
    box2.classList.remove('c')
    box2.classList.remove('d')

    if (i$a1 == 1) {
      answer$1 = a1
    } else if (i$b1 == 1) {
      answer$1 = b1
    } else if (i$c1 == 1) {
      answer$1 = c1
    } else if (i$d1 == 1) {
      answer$1 = d1
    }

  } else if (i$q == 2) {
    if ((i$a2 == 0) & (i$b2 == 0) & (i$c2 == 0) & (i$d2 == 0)) {
      alert('Marque alguma alternativa.')
      return
    }

    h4$.innerHTML = q3
    a$.innerHTML = a3
    b$.innerHTML = b3
    c$.innerHTML = c3
    d$.innerHTML = d3

    i$q = 3

    box2.classList.remove('a')
    box2.classList.remove('b')
    box2.classList.remove('c')
    box2.classList.remove('d')

    if (i$a2 == 1) {
      answer$2 = a2
    } else if (i$b2 == 1) {
      answer$2 = b2
    } else if (i$c2 == 1) {
      answer$2 = c2
    } else if (i$d2 == 1) {
      answer$2 = d2
    }
  } else if (i$q == 3) {
    if ((i$a3 == 0) & (i$b3 == 0) & (i$c3 == 0) & (i$d3 == 0)) {
      alert('Marque alguma alternativa.')
      return
    }

    h4$.innerHTML = q4
    a$.innerHTML = a4
    b$.innerHTML = b4
    c$.innerHTML = c4
    d$.innerHTML = d4

    i$q = 4

    box2.classList.remove('a')
    box2.classList.remove('b')
    box2.classList.remove('c')
    box2.classList.remove('d')

    if (i$a3 == 1) {
      answer$3 = a3
    } else if (i$b3 == 1) {
      answer$3 = b3
    } else if (i$c3 == 1) {
      answer$3 = c3
    } else if (i$d3 == 1) {
      answer$3 = d3
    }
  } else if (i$q == 4) {
    if ((i$a4 == 0) & (i$b4 == 0) & (i$c4 == 0) & (i$d4 == 0)) {
      alert('Marque alguma alternativa.')
      return
    }

    h4$.innerHTML = q5
    a$.innerHTML = a5
    b$.innerHTML = b5
    c$.innerHTML = c5
    d$.innerHTML = d5

    i$q = 5

    box2.classList.remove('a')
    box2.classList.remove('b')
    box2.classList.remove('c')
    box2.classList.remove('d')

    if (i$a4 == 1) {
      answer$4 = a4
    } else if (i$b4 == 1) {
      answer$4 = b4
    } else if (i$c4 == 1) {
      answer$4 = c4
    } else if (i$d4 == 1) {
      answer$4 = d4
    }

    nextBtn.innerHTML = 'Finalizar'
  } else if (i$q == 5) {
    // QUANTIDADE DE ACERTOS NA TELA FINAL E JÁ ESCREVENDO NO ANSWERS A RESPOSTA DO USUÁRIO

    if (i$a5 == 1) {
      answer$5 = a5
    } else if (i$b5 == 1) {
      answer$5 = b5
    } else if (i$c5 == 1) {
      answer$5 = c5
    } else if (i$d5 == 1) {
      answer$5 = d5
    }

    if (i$a1 == 1) {
      q$1 = 1
      answer1.classList.add('correct')
      answer1.innerHTML = answer$1
    } else {
      q$1 = 0
      answer1.classList.add('wrong')
      answer1.innerHTML = answer$1
    }

    if (i$b2 == 1) {
      q$2 = 1
      answer2.classList.add('correct')
      answer2.innerHTML = answer$2
    } else {
      q$2 = 0
      answer2.classList.add('wrong')
      answer2.innerHTML = answer$2
    }

    if (i$c3 == 1) {
      q$3 = 1
      answer3.classList.add('correct')
      answer3.innerHTML = answer$3
    } else {
      q$3 = 0
      answer3.classList.add('wrong')
      answer3.innerHTML = answer$3
    }

    if (i$d4 == 1) {
      q$4 = 1
      answer4.classList.add('correct')
      answer4.innerHTML = answer$4
    } else {
      q$4 = 0
      answer4.classList.add('wrong')
      answer4.innerHTML = answer$4
    }

    if (i$d5 == 1) {
      q$5 = 1
      answer5.classList.add('correct')
      answer5.innerHTML = answer$5
    } else {
      q$5 = 0
      answer5.classList.add('wrong')
      answer5.innerHTML = answer$5
    }

    total = q$1 + q$2 + q$3 + q$4 + q$5

    // COLOCANDO ISSO NA TELA FINAL

    document.body.classList.remove('box-2')
    document.body.classList.add('box-3')

    if (total == 0) {
      h2$.innerHTML = 'Puxa, não foi dessa vez.'
      rating.classList.add('wrong')
    } else if (total <= 2) {
      h2$.innerHTML = 'Não foi tão ruim!'
      rating.classList.add('yellow')
    } else if (total <= 4) {
      h2$.innerHTML = 'Muito bom! Foi por pouco!'
      rating.classList.add('correct')
    } else if (total == 5) {
      h2$.innerHTML = 'Parabéns! Você gabaritou!'
      rating.classList.add('correct')
    }

    rating.innerHTML = total

    // ENUNCIADO E RESPOSTA CERTA

    h4$1.innerHTML = q1
    h4$2.innerHTML = q2
    h4$3.innerHTML = q3
    h4$4.innerHTML = q4
    h4$5.innerHTML = q5

    correct1.innerHTML = a1
    correct2.innerHTML = b2
    correct3.innerHTML = c3
    correct4.innerHTML = d4
    correct5.innerHTML = d5
  }
}

// FUNÇÃO PRA VOLTAR PRA TELA ANTERIOR

function back() {
  if (i$q == 5) {
    h4$.innerHTML = q4
    a$.innerHTML = a4
    b$.innerHTML = b4
    c$.innerHTML = c4
    d$.innerHTML = d4

    i$q = 4

    if (i$a5 == 1) {
      box2.classList.remove('a')
    } else if (i$b5 == 1) {
      box2.classList.remove('b')
    } else if (i$c5 == 1) {
      box2.classList.remove('c')
    } else if (i$d5 == 1) {
      box2.classList.remove('d')
    }

    if (i$a4 == 1) {
      box2.classList.add('a')
    } else if (i$b4 == 1) {
      box2.classList.add('b')
    } else if (i$c4 == 1) {
      box2.classList.add('c')
    } else if (i$d4 == 1) {
      box2.classList.add('d')
    }
  } else if (i$q == 4) {
    h4$.innerHTML = q3
    a$.innerHTML = a3
    b$.innerHTML = b3
    c$.innerHTML = c3
    d$.innerHTML = d3

    i$q = 3

    if (i$a4 == 1) {
      box2.classList.remove('a')
    } else if (i$b4 == 1) {
      box2.classList.remove('b')
    } else if (i$c4 == 1) {
      box2.classList.remove('c')
    } else if (i$d4 == 1) {
      box2.classList.remove('d')
    }

    if (i$a3 == 1) {
      box2.classList.add('a')
    } else if (i$b3 == 1) {
      box2.classList.add('b')
    } else if (i$c3 == 1) {
      box2.classList.add('c')
    } else if (i$d3 == 1) {
      box2.classList.add('d')
    }
  } else if (i$q == 3) {
    h4$.innerHTML = q2
    a$.innerHTML = a2
    b$.innerHTML = b2
    c$.innerHTML = c2
    d$.innerHTML = d2

    i$q = 2

    if (i$a3 == 1) {
      box2.classList.remove('a')
    } else if (i$b3 == 1) {
      box2.classList.remove('b')
    } else if (i$c3 == 1) {
      box2.classList.remove('c')
    } else if (i$d3 == 1) {
      box2.classList.remove('d')
    }

    if (i$a2 == 1) {
      box2.classList.add('a')
    } else if (i$b2 == 1) {
      box2.classList.add('b')
    } else if (i$c2 == 1) {
      box2.classList.add('c')
    } else if (i$d2 == 1) {
      box2.classList.add('d')
    }
  } else if (i$q == 2) {
    h4$.innerHTML = q1
    a$.innerHTML = a1
    b$.innerHTML = b1
    c$.innerHTML = c1
    d$.innerHTML = d1

    i$q = 1

    if (i$a2 == 1) {
      box2.classList.remove('a')
    } else if (i$b2 == 1) {
      box2.classList.remove('b')
    } else if (i$c2 == 1) {
      box2.classList.remove('c')
    } else if (i$d2 == 1) {
      box2.classList.remove('d')
    }

    if (i$a1 == 1) {
      box2.classList.add('a')
    } else if (i$b1 == 1) {
      box2.classList.add('b')
    } else if (i$c1 == 1) {
      box2.classList.add('c')
    } else if (i$d1 == 1) {
      box2.classList.add('d')
    }
  } else if (i$q == 1) {
    i$q = 0

    if (i$a1 == 1) {
      box2.classList.remove('a')
    } else if (i$b1 == 1) {
      box2.classList.remove('b')
    } else if (i$c1 == 1) {
      box2.classList.remove('c')
    } else if (i$d1 == 1) {
      box2.classList.remove('d')
    }

    document.body.classList.remove('box-2')
    document.body.classList.add('box-1')
  }
}

// VOLTAR PRA TELA DA PRIMEIRA QUESTÃO E RECOMEÇAR

function restart() {
  // Voltando pra tela da primeira questão

  document.body.classList.remove('box-3')
  document.body.classList.add('box-1')

  // Removendo as classes do answers pra não dar ruim

  answer1.classList.remove('correct')
  answer1.classList.remove('wrong')

  answer2.classList.remove('correct')
  answer2.classList.remove('wrong')

  answer3.classList.remove('correct')
  answer3.classList.remove('wrong')

  answer4.classList.remove('correct')
  answer4.classList.remove('wrong')

  answer5.classList.remove('correct')
  answer5.classList.remove('wrong')

  // Tirando as classes das letras pq se não a questão 1 fica marcada

  box2.classList.remove('a')
  box2.classList.remove('b')
  box2.classList.remove('c')
  box2.classList.remove('d')

  // Removendo as classes do span que printa a pontuação com cor

  rating.classList.remove('correct')
  rating.classList.remove('yellow')
  rating.classList.remove('wrong')
}
