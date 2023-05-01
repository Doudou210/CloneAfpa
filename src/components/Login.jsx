// import React from "react";
// import "../css/Login.css";

// export default function Login(){
//     return(
//         <div className="wrapper">
//                 <div className="form-box login">
//                     <span>
//                         <ion-icon className='icon__close' name="close-outline"></ion-icon>
//                     </span>
//                     <h2>Login</h2>

//                     <form action="#">
//                         <div className="input_box">
//                             <span className="icon">
//                             <ion-icon name="mail"></ion-icon>
//                             </span>
//                             <input type="email" required/>
//                             <label type="Email">Email</label>
//                         </div>

//                         <div className="input_box">
//                             <span className="icon">
//                             <ion-icon name="lock-closed"></ion-icon>
//                             </span>
//                             <input type="password" required/>
//                             <label htmlFor="Password">Password</label>
//                         </div>

//                         <div className="remember_forgot">
//                             <label><input className="check" type="checkbox"/>Remember me</label>
//                             <a href="/">Forgot Password ?</a>
//                         </div>

//                         <button className="btn" type="submit">Login</button>

//                         <div className="login__register">
//                             <p>Don't have an account ? <a href="/" className="register__link">Register</a></p>
//                         </div>

//                     </form>
//                 </div>
//             </div>
 
//     )
// }

function Login(){
    const wrapper = document.querySelector('.wrapper');
    const loginlink = document.querySelector('.login__link');
    const registerlink = document.querySelector('.register__link');

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
export default Login;