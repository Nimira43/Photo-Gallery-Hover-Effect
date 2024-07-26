const navItems = document.querySelectorAll('.nav-item')
const gallery = document.querySelector('.gallery')
const images = document.querySelector('.images')

navItems.forEach((navItem, i) => {
  navItem.addEventListener('mouseover', (e) => {
    images.style.transform = `translateY(-${i * 25}%)`
  
    const colour = navItem.getAttribute('data-colour')
    gallery.style.backgroundColor = `#${colour}`
  })
})