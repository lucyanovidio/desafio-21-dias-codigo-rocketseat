function button() {
  document.body.classList.add('rocket')
  
  setTimeout(function () {
    document.body.classList.remove('rocket')
  }, 10000)
}