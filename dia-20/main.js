// O "EmojiButton" ta ficando subinhado e avisando no consolu q n foi declarado, e sai quando eu uso aquele import, mas eu n to sabendo usar o import (e eu achava q n ia precisar pq eu chamei o script do cdn no html)
// o righ-start funcionou, mas outras coisas n funcionam ali n sei pq
// a caixa de emojis tinha ficado pequena e algumas coisas tavam transbordando, daí tive que arrumar no css pegando o nome das classes conforme fui vendo pelo dev tools
// n entendo ainda oq esse bglh de emoji button é, pq n é lib nem framework, sla oq é,e  n endendo como funciona isso de usar algo externo. Como é isso do cdn, e quais outros q funcionam tbm. 
// tbm n sei fazer leitura de documentação

const container = document.querySelector('.emoji-container')
const copyBtn = document.querySelector('.copy-btn')
const emojiBtn = document.querySelector('.emoji-btn')

let picker = new EmojiButton({
  position: 'right-start'
})

picker.on('emoji', (emoji) => {
  container.innerHTML = emoji
})

emojiBtn.addEventListener('click', () => {
  if(picker.pickerVisible) {
    picker.hidePicker()
  } else {
    picker.showPicker(container)
  }
  // picker.pickerVisible ? picker.hidePicker() : picker.showPicker(input)
})

copyBtn.addEventListener('click', async () => {
  if(!container.innerHTML) {
    alert('Gere o emoji.')
    return
  }
  
  await window.navigator.clipboard.writeText(container.innerHTML)
  alert('Emoji copiado!')
})