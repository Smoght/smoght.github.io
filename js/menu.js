const menuIcon = document.querySelector('.icon-menu')
const navigation = document.querySelector('.navigation')
const portafolio =document.querySelector('.products')
const links = document.querySelector('.nav-items')
menuIcon.onclick = function(){
    menuIcon.classList.toggle('active')
    navigation.classList.toggle('active')
    portafolio.classList.toggle('ocultar')
}
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
function toggleMenu(){
    menuIcon.classList.remove('active')
    navigation.classList.remove('active')
}