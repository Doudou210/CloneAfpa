let $nav = document.querySelector('nav');
let $span = document.querySelector('span svg');

$span.addEventListener('click', ()=>{
    $nav.classList.toggle('on');
    console.log('retirer');
})