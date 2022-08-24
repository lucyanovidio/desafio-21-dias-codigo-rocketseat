const btn$ = document.querySelector('#btn')
const span$ = document.querySelector('h1 span')

btn$.addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode"), e.target.checked
  if(document.body.classList == "") {
    span$.innerHTML = "dark mode"
  } else {
    span$.innerHTML = "light mode"
  }
})
