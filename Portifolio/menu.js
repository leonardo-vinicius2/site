let btnMenu = document.getElementById ('menu1');
let menu = document.getElementById ('mobile');
let overlay = document.getElementById ('overM');
let button = document.getElementById ('trilho');


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
})

overlay.addEventListener('click', ()=>{
   menu.classList.remove('abrir-menu');
})

button.addEventListener('click', function(){
    DarkMode();
});

function DarkMode() {

    var body = document.querySelector('body');
    var bodyStyle = window.getComputedStyle(body);
    var bodyElements = [];
    for (element in body.children) {
        bodyElements.push(element)
    };
    bodyElements = bodyElements.slice(0,-3);
    // alert(bodyElements)

    if (bodyStyle.backgroundColor == 'rgb(0, 0, 0)') {
        body.style.backgroundColor = 'white';
        body.style.color = 'white';
        
       
    } else if (bodyStyle.backgroundColor == 'rgb(255, 255, 255)') {
        body.style.backgroundColor = 'black';
        body.style.color = 'black';
        
    }
}