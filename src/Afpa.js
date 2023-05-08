const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login__link');
const registerlink = document.querySelector('.register__link');

function Afpa(){
    registerlink.addEventListener('click', (e)=>{
        e.preventDefault();
        wrapper.classList.add('active');
        // console.log('active');
    });
        
    loginlink.addEventListener('click', (e)=>{
        e.preventDefault();
        wrapper.classList.remove('active');
        // console.log('active');
    });

}

export default Afpa;