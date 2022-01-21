const menuIcon = document.querySelector('.icon-menu')
const navigation = document.querySelector('.navigation')
const portafolio =document.querySelector('.products')
const links = document.querySelector('.nav-items')
const typing = document.querySelector('.typing')
menuIcon.onclick = function(){
    menuIcon.classList.toggle('active')
    navigation.classList.toggle('active')
    portafolio.classList.toggle('ocultar')
    typing.classList.toggle('ocultar')

}
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
function toggleMenu(){
    menuIcon.classList.remove('active')
    navigation.classList.remove('active')
}