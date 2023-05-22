import React from "react";
import "../css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import LoginPage from "../components/LoginPage";

export default function Home(){

    return(
        <div>
            <Header/>
            <div className="offre">
                <div className="particulier">
                    <h1>Notre offre particulier</h1>
                    <p>Apprendre, se former, réflechir à son projet pro, se reconvertir</p>
                    <Link to={'/'}>Formez vous à distance</Link>
                    <Link to={'/'}>Devenez agent de restauratin Buffalo Grill</Link>
                    <Link to={'/'}>Devenez Technicien-vendeur chez Decathion</Link>
                    <Link to={'/'}>Devenez assistante de vie avec Oui Car</Link>
                    <button className="btnP" type="text"> Découvrir plus</button>
                </div>

                <div className="alternance">
                    <h1>Nos formations en alternance</h1>
                    <p>Des formations prêtes à l’emploi sur plus de 200 métiers</p>
                    <Link to={'/'}>Nos formations prêtes à l'emploi</Link>
                    <Link to={'/'}>Trouvez votre entreprise</Link>
                    <Link to={'/'}>Se former à l'Afpa</Link>
                    <Link to={'/'}>Le choix en alternance</Link>
                    <button className="btnP" type="text"> Découvrir plus</button>
                </div>

                <div className="recrutement">
                    <h1>Recrutement en Alternance</h1>
                    <p>Un accompagnement complet pour former et recruter vos alternants</p>
                    <Link to="/">Alternance avec l'Afpa</Link>
                    <Link to="/">Un recrutement encadré et maîtrisé</Link>
                    <Link to="/">Un service clé en main</Link>
                    <Link to="/">Une formation tutoral</Link>
                    <button className="btnP" type="text">Découvrir plus</button>
                </div>
            </div>

            <div className="recherche">
                <div className="formation">
                    <h3>Recherche formation</h3>
                    <input placeholder="Votre metier, domaine" className="btnF"></input>
                    <input placeholder="Votre region" className="btnF"></input>
                    <input placeholder="Recherche" className="btnF"></input>
                </div>

                <div className="rencontre">
                    <h3>Venez nous rencontrer</h3>
                    <p>Pour connaître les évènements proches de chez nous,
                        renseignez votre ville ou votre code postal.
                    </p>
                    <input placeholder="Indiquez votre ville" className="btnF"/>
                </div>

                <div className="stats">
                    <div className="resultats">
                        <h3>Nos résultats</h3>
                        <span></span>
                        <h1>84.6%</h1>
                        <p>de réussite au titre professionnel</p>

                        <span></span>
                        <h1>71%</h1>
                        <p> d'accès à l'emploi dans les 6 mois</p>

                        <span></span>
                        <h1>86%</h1>
                        <p>de stagiaires satisfaits</p>
                    </div>

                    <div className="cata">
                        <h3>L'Afpa c'est</h3>
                        <h1>900</h1>
                        <p>Formations catalogues</p>
                        <h1>116</h1>
                        <p>Centre de Formation</p>
                    </div>
                </div>
            </div>

            <div className="info">
                <h2>Info</h2>
                <div className="barI"></div>
                <div className="para">
                    <p>Formez vous sur le terrain au métier de technicien vendeur</p>
                    <div className="bar"></div>
                    <p>Technicien supérieur en impression 3D, un métier qui de</p>
                    <div className="bar"></div>
                    <p>Reconversion proffessionnelle: focus sur 10 métiers qui marquent le monde</p>
                </div>
            </div>

            <div className="partenaires">
                <h2>Nos partenaires</h2>
                <p>La plupart des formations qualifiants de l'Afpa sont financées dans le cadre de la programmation de formation de votre conseil régional.</p>
                <div className="list__img">
                    <img src="data:image/png;base64,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" alt="GrandEst logo" />
                    <img src="https://www.auvergnerhonealpes-orientation.fr/wp-content/uploads/2020/11/logo_region_orientaion_rvb-1.png" alt="La région" />
                    <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/f/ff/Logo_Collectivit%C3%A9_Territoriale_Corse_2011.svg/1280px-Logo_Collectivit%C3%A9_Territoriale_Corse_2011.svg.png" alt="corse logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/9/93/Logo_Nouvelle-Aquitaine_2019.svg/1200px-Logo_Nouvelle-Aquitaine_2019.svg.png" alt="Nouvelle aquitaine" />
                    <img src="https://www.poledream.org/wp-content/uploads/2018/04/apr-ir.jpg" alt="Centre val de loire" />
                    <img src="https://tourisme.volvestre.fr/wp-content/uploads/2019/04/logo-OCC.png" alt="Occitanie" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/R%C3%A9gion_%C3%8Ele-de-France_%28logo%29.svg/2560px-R%C3%A9gion_%C3%8Ele-de-France_%28logo%29.svg.png" alt="Région île de France" />
                    <img src="https://getlogo.net/wp-content/uploads/2020/05/region-bretagne-logo-vector.png" alt="Région Bretagne" />
                    <img src="https://www.usdole.fr/wp-content/uploads/2019/10/r%C3%A9gion_bourg_fc.jpg" alt="Région bourgogne" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}