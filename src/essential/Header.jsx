import React from "react";
import "../css/Header.css"

export default function Header(){

    return(
        <div className="nav">

            <div className="logo">
                <img src="https://www.alternance-professionnelle.fr/wp-content/uploads/2020/09/LOGO-AFPA-VERT-PNG.png" alt="logo afpa" />
            </div>

           <nav>
                <a className="link" href="/">Accueil</a>
                <a className="link" href="/">Nos formations</a>
                <a className="link" href="/">Actualités</a>
                <a className="link" href="/">Groupe Afpa</a>
                <a className="login" href="/">login</a>
                <a className="signUp" href="/">Sign up</a>
            </nav> 

        </div>
    )
}