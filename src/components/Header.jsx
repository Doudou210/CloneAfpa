import React from "react";
import "../css/Header.css";

export default function Header(){

    return(
        <div>
            <header>
                <img src="https://www.alternance-professionnelle.fr/wp-content/uploads/2020/09/LOGO-AFPA-VERT-PNG.png" alt="logo afpa" />
                <nav className="nav__bar">
                    <a href="/">Accueil</a>
                    <a href="/">Formations</a>
                    <a href="/">Actualités</a>
                    <a href="/">Groupe Afpa</a>
                    <button className="btnLogin" type="button" onClick={'Login'}>Login</button>
                </nav> 
            </header>

            <div className="wrapper">
                <div className="form-box login">
                    <h2>Login</h2>
                    <span><ion-icon name="close-outline"></ion-icon></span>

                    <form action="#">
                        <div className="input_box">
                            <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="email" required/>
                            <label type="Email">Email</label>
                        </div>

                        <div className="input_box">
                            <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" required/>
                            <label htmlFor="Password">Password</label>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox"/>Remember me</label>
                            <a href="/">Forgot Password ?</a>
                        </div>

                        <button className="btn" type="submit">Login</button>

                        <div className="login__register">
                            <p>Don't have an account ? <a href="/" className="register__link">Register</a></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}