const key = document.querySelector('#tecla')

// MANO COMO ASSSIIIIIMMMMM, qnd eu tinha colocado tecla ele n tava indo, aí eu coloquei "key" e ele foi, como se o próprio js já entendesse oq "key" significa, eu n entendo isso mano ????
document.addEventListener('keydown', function (e) {
  key.innerHTML = e.key
  if (e.keyCode == 32) {
    key.innerHTML = "Space"
  }
})
