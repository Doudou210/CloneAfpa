let $search = document.querySelector('.banner');

let $materialSO = document.querySelector('.material-symbols-outlined');

$materialSO.addEventListener('click', function(){
    $search.classList.toggle('active');
})

window.onscroll= () =>{
    let $head = document.querySelector('header');
    let scroll = window.pageYOffset;

    if (scroll < 10) {
        $head.style.background = '#d9d9d9';
        $materialSO.style.color='black'
    }
    else {
        // transparent
        // $head.style.background = 'red';
        $head.style.background = 'transparent';
    } 
}

//Pour selection dans header
let $navBar = document.querySelectorAll('header nav ul li');

//Un boucle for pour selection
for (let i = 0; i < $navBar.length; i++) {
    $navBar[i].addEventListener('click', ()=>{
        let $activeBtn = document.querySelector('header nav ul li.actived');

        console.log('marche');
        //ajouter ou retirer classes actives.
        $activeBtn.classList.toggle('actived');
        $navBar[i].classList.toggle('actived');
    })
    
}