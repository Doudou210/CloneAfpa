import React from "react";
import "../css/Header.css";
import './LoginPage' ;
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <div>
            <header>

                <img src="https://www.alternance-professionnelle.fr/wp-content/uploads/2020/09/LOGO-AFPA-VERT-PNG.png" alt="logo afpa" />

                <nav className="nav__bar">
                    <Link to={"/"}>Accueil</Link>
                    <Link to={"/"}>Formations</Link>
                    <Link to={"/"}>Actualités</Link>
                    <Link to={"/"}>Groupe Afpa</Link>
                </nav>

                {/* Pour afficher le login */}
                <Link to={`/login`}> <button className="btnLogin" type="button">Login</button></Link>
            </header>

            {/*Voir le composant Login & Register*/}
            {/* <div className="wrapper">
                {alterne ? <div className="form_box login">
                    <span>
                        <ion-icon className='icon__close' name="close-outline"></ion-icon>
                    </span>
                    <h2>Login</h2>

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

                        <div className="remember_forgot">
                            <label><input className="check" type="checkbox"/>Remember me</label>
                            <a href="/">Forgot Password ?</a>
                        </div>

                        <button className="btn" type="submit">Login</button>

                        <div className="login__register">
                            <p>Don't have an account ? <button className="register__link" onClick={()=>{setAlterne(false)}}>Register</button></p>
                        </div>

                    </form>
                </div> :

                <div className="form_box register">
                    <span>
                        <ion-icon className='icon__close' name="close-outline"></ion-icon>
                    </span>
                    <h2>Registration</h2>

                    <form action="#">
                        <div className="input_box">
                            <span className="icon">
                            <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="name" required/>
                            <label type="Email">Username</label>
                        </div>
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

                        <div className="remember_forgot">
                            <label><input type="checkbox"/>
                            I agree to the terms & conditions</label>
                        </div>

                        <button className="btn" type="submit">Regsiter</button>

                        <div className="login__register">
                            <p>Already have an account ? 
                                <a href="/" className="login__link">Login</a>
                            </p>
                        </div>

                    </form>
                </div>}
            </div> */}
        </div>
    )
}