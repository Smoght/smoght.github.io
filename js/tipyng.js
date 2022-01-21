const text = ['Diseñador', 'Programador', 'Ilustrador', 'Fotógrafo'];
let count = 0;
let index = 0;
let current = '';
let letters ='';

(function type(){
    if(count === text.length){
        count=0;
    }
    current = text[count];
    letters = current.slice(0, ++index)

    document.querySelector('.typing').textContent = letters;
    if(letters.length === current.length){
        count++;
        index=0;
    }
    setTimeout(type,300)
})();