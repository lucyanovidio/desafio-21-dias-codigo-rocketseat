// como q eu faço uma transição lenta da escrita do light mode?

const btn$ = document.querySelector('.theme-btn')
const span$ = document.querySelector('h1 span')

btn$.addEventListener("click", function() {
  if(document.body.classList == "") {
    document.body.classList.add('dark-mode')
    span$.innerHTML = "light mode"
  } else {
    document.body.classList.remove('dark-mode')
    span$.innerHTML = "dark mode"
  }
})

