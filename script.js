const navItems = document.querySelectorAll('.nav-item')
const gallery = document.querySelector('.gallery')
const images = document.querySelector('.images')

navItems.forEach((navItem, i) => {
  navItem.addEventListener('mouseover', (e) => {
    images.style.transform = `translateY(-${i * 25}%)`
  
    const colour = navItem.getAttribute('data-colour')
    gallery.style.backgroundColor = `#${colour}`

    let top = e.clientY 
    let left = e.clientX
    gallery.style.top = `${top}px`
    gallery.style.left = `${left}px`
  })
  navItem.addEventListener('mouseover', () => {
    gallery.style.transform = 'translate(-50%, -50%) scale(1)'
  })
  navItem.addEventListener('mouseleave', () => {
    gallery.style.transform = 'translate(-50%, -50%) scale(0)'
  })
})