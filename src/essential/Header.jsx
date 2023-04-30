import React from "react";
import "../css/Header.css";

export default function Header(){

    return(
        <div className="header">

            <img src="https://www.alternance-professionnelle.fr/wp-content/uploads/2020/09/LOGO-AFPA-VERT-PNG.png" alt="logo afpa" />

           <nav className="nav__bar">
                <a href="/">Accueil</a>
                <a href="/">Nos formations</a>
                <a href="/">Actualités</a>
                <a href="/">Groupe Afpa</a>
                <button className="btnLogin" href="/">Login</button>
            </nav> 

        </div>
    )
}