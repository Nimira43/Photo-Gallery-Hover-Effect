const navItems = document.querySelectorAll('.nav-item')
const gallery = document.querySelector('.gallery')
const galleryBtn = document.querySelector('.gallery-btn')
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
    galleryBtn.style.top = `${top}px`
    galleryBtn.style.left = `${left}px`
  })
  navItem.addEventListener('mouseover', () => {
    gallery.style.transform = 'translate(-50%, -50%) scale(1)'
    galleryBtn.style.transform = 'translate(-50%, -50%) scale(1)'
  })
  navItem.addEventListener('mouseleave', () => {
    gallery.style.transform = 'translate(-50%, -50%) scale(0)'
    galleryBtn.style.transform = 'translate(-50%, -50%) scale(0)'
  })
})