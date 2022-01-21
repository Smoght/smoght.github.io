let list = document.querySelectorAll('.list');
let itemBox= document.querySelectorAll('.item-box');
const fulImgBox = document.getElementById('fulImgBox')
const fulImg = document.getElementById('fulImg')
let menu =document.querySelectorAll('.nav-menu a')
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click',function(){
        for(let j = 0;j< list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        for(let k=0; k<itemBox.length;k++){
            itemBox[k].classList.remove('active')
            itemBox[k].classList.add('hide')

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                itemBox[k].classList.remove('hide')
                itemBox[k].classList.add('active')
            }
        }
    });
}
function openFulImg(reference){
    fulImgBox.style.display="flex"
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display="none"
}
function cerrarMenu(){
    menu.style.display="none"
}