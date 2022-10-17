window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    button()
  } else if (e.keyCode === 27) {
    // keyCode 27 = ESC
    document.body.classList.remove('rocket')
  }
})

function button() {
  document.body.classList.add('rocket')

  setTimeout(function () {
    document.body.classList.remove('rocket')
  }, 10000)
}