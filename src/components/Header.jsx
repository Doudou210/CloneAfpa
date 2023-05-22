import React from "react";
import "../css/Header.css";
import './LoginPage' ;
import { Link } from "react-router-dom";

export default function Header(){
    // const [check, setCheck] = useState(true);
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
                
                <Link to='/loginpage'><button className="btnLogin">Login</button></Link>

            </header>

        </div>
    )
}