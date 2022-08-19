function helloWorld() {
  document.body.classList.add('hello-world')

    setTimeout(function () {
      document.body.classList.remove('hello-world')
    }, 5000)
}