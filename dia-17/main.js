const key = document.querySelector('#tecla')

document.addEventListener('keydown', function (e) {
  key.innerHTML = e.key
  if (e.keyCode == 32) {
    key.innerHTML = "Space"
  }
})
