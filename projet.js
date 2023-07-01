let $search = document.querySelector('.banner');

let $materialSO = document.querySelector('.material-symbols-outlined');

$materialSO.addEventListener('click', function(){
    $search.classList.toggle('active');
})

let $body = document.querySelector('body');

window.onscroll= () =>{
    let $head = document.querySelector('header');
    let scroll = window.pageYOffset;

    if (scroll < 10) {
        $head.style.background = '#D9D9D9';
        $body.style.background = 'novajowhite';
        $materialSO.style.color='black'
    }
    else {
        // transparent
        $head.style.background = '#D9D9D9';
        // $head.style.background = 'transparent';
    } 
}