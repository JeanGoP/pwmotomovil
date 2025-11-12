const navToggle = document.querySelector('.nav-toggle')
const primaryNav = document.getElementById('primary-nav')
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('open')
    navToggle.setAttribute('aria-expanded', String(open))
  })
}

const slider = document.querySelector('[data-slider]')
const prev = document.querySelector('[data-slider="prev"]')
const next = document.querySelector('[data-slider="next"]')
if (slider && prev && next) {
  const step = () => slider.clientWidth * 0.6
  prev.addEventListener('click', () => slider.scrollBy({ left: -step(), behavior: 'smooth' }))
  next.addEventListener('click', () => slider.scrollBy({ left: step(), behavior: 'smooth' }))
}

const contactForm = document.querySelector('.contact-form')
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Gracias por tu mensaje. En breve te contactaremos.')
    contactForm.reset()
  })
}

const tabs = document.querySelectorAll('.tab[data-filter]')
const modelCards = document.querySelectorAll('.card[data-category]')
if (tabs.length && modelCards.length) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'))
      tab.classList.add('active')
      const filter = tab.getAttribute('data-filter')
      modelCards.forEach(card => {
        const show = filter === 'all' || card.getAttribute('data-category') === filter
        card.style.display = show ? '' : 'none'
      })
    })
  })
}

const carousel = document.querySelector('[data-carousel]')
if (carousel) {
  const slides = carousel.querySelector('.slides')
  const items = carousel.querySelectorAll('.slide')
  const prevBtn = carousel.querySelector('.arrow.prev')
  const nextBtn = carousel.querySelector('.arrow.next')
  const dotsWrap = carousel.querySelector('.dots')
  let index = 0
  let timer = null

  const updateDots = () => {
    dotsWrap.innerHTML = ''
    items.forEach((_, i) => {
      const b = document.createElement('button')
      if (i === index) b.classList.add('active')
      b.addEventListener('click', () => { index = i; render() })
      dotsWrap.appendChild(b)
    })
  }

  const render = () => {
    const w = carousel.clientWidth
    slides.style.transform = `translateX(-${index * w}px)`
    updateDots()
  }

  const next = () => { index = (index + 1) % items.length; render() }
  const prev = () => { index = (index - 1 + items.length) % items.length; render() }

  const start = () => { stop(); timer = setInterval(next, 5000) }
  const stop = () => { if (timer) { clearInterval(timer); timer = null } }

  window.addEventListener('resize', render)
  nextBtn.addEventListener('click', () => { next(); start() })
  prevBtn.addEventListener('click', () => { prev(); start() })
  carousel.addEventListener('mouseenter', stop)
  carousel.addEventListener('mouseleave', start)
  render(); start()

  items.forEach((slide) => {
    const img = slide.querySelector('img')
    if (img) {
      img.addEventListener('error', () => {
        slide.style.background = 'linear-gradient(120deg, #222, #555)'
        img.style.display = 'none'
      })
    }
  })

  // imágenes fijas desde assets/
}

// Fallback para imágenes de tarjetas
document.querySelectorAll('.card-media img').forEach(img => {
  img.addEventListener('error', () => {
    const wrap = img.parentElement
    if (wrap) wrap.style.background = 'linear-gradient(135deg, #151519, #30303a)'
    img.style.display = 'none'
  })
})
