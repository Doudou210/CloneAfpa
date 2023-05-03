import React from "react";
import "../css/Home.css";

export default function Home(){

    return(
        <div>
            <div className="offre">
                <div className="particulier">
                    <h1>Notre offre particulier</h1>
                    <p>Apprendre, se former, réflechir à son projet pro, se reconvertir</p>
                    <a href="/">Formez vous à distance</a>
                    <a href="/">Devenez agent de restauratin Buffalo Grill</a>
                    <a href="/">Devenez Technicien-vendeur chez Decathion</a>
                    <a href="/">Devenez assistante de vie avec Oui Car</a>
                    <button className="btn" type="text"> Découvrir plus</button>
                </div>

                <div className="alternance">
                    <h1>Nos formations en alternance</h1>
                    <p>Des formations prêtes à l’emploi sur plus de 200 métiers</p>
                    <a href="/">Nos formations prêtes à l'emploi</a>
                    <a href="/">Trouvez votre entreprise</a>
                    <a href="/">Se former à l'Afpa</a>
                    <a href="/">Le choix en alternance</a>
                    <button className="btn" type="text"> Découvrir plus</button>
                </div>

                <div className="recrutement">
                    <h1>Recrutement en Alternance</h1>
                    <p>Un accompagnement complet pour former et recruter vos alternants</p>
                    <a href="/">Alternance avec l'Afpa</a>
                    <a href="/">Un recrutement encadré et maîtrisé</a>
                    <a href="/">Un service clé en main</a>
                    <a href="/">Une formation tutoral</a>
                    <button className="btn" type="text">Découvrir plus</button>
                </div>
            </div>

            <div className="recherche">
                <div className="list1"></div>

                <div className="list1"></div>

                <div className="list1"></div>
            </div>

        </div>
    )
}