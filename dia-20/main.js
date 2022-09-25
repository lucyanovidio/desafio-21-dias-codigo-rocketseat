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
})

copyBtn.addEventListener('click', async () => {
  if(!container.innerHTML) {
    alert('Gere o emoji.')
    return
  }
  
  await window.navigator.clipboard.writeText(container.innerHTML)
  alert('Emoji copiado!')
})
