// https://vincentgarreau.com/particles.js/

// Pgeamos essa função pra iniciar o particles na classe canvas.background lá da documentação, mas eu não sei bem como a glr costuma fazer qnd vai usar uma lib. Na real eu n sei de nd de js e uso de ferramentas, mas qnd eu chegar nessa etapa no explorer e com o conteúdo do discover pela biblioteca explorer, eu vou entender melhor,e ntão não surta. Tu ta no caminho

// window.onload = function () {
//   Particles.init({
//     selector: '.background',
//     maxParticles: 200,
//     sizeVariations: 3,
//     speed: 0.07,
//     color: ['#fff'],
//     minDistance: 80
//   })
// }

particlesJS('particles-js', {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 47.952047952047955,
        size_min: 0.1,
        sync: true
      }
    },
    line_linked: {
      enable: false,
      distance: 142.0465754938091,
      color: '#ffffff',
      opacity: 0.2324947488255008,
      width: 1.122388442605866
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3607.6771369474263,
        rotateY: 2004.2650760819035
      }
    }
  },

  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: false, mode: 'repulse' },
      onclick: { enable: true, mode: 'repulse' },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 365.4347455356053, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
})

// tentei isso aqui pra aparecer as linhas e sumir td hr, mas n consegui

// function lines() {
//   particles.line_linked.color.enable = false

//   setTimeout(function() {
//     particles.line_linked.enable = true
//   }, 1000)

//   return lines()
// }

var count_particles, stats, update
stats = new Stats()
stats.setMode(0)
stats.domElement.style.position = 'absolute'
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'
document.body.appendChild(stats.domElement)
count_particles = document.querySelector('.js-count-particles')
update = function () {
  stats.begin()
  stats.end()
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length
  }
  requestAnimationFrame(update)
}
requestAnimationFrame(update)
