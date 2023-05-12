import React from "react";
import "../css/Footer.css";

export default function Footer(){

    return(
        <div>
            <div className="beforefoot">
                <h3>Pourquoi choisir l'AFPA</h3>
                <div className="choix">
                    <p>Un apprentissage en situation réelle de travail</p>
                
                    <p>Une gamme de formations ppur tous les publics</p>
                
                    <p>Une présence sur tout le territoire</p>
                
                    <p>Une offre d'hébergement et de restauration</p>
                </div>
            </div>
            
            <div className="contacts">
                <div className="contactR">
                    <h3>Nos contacts sur les réseaux</h3>
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook logo" />
                    <img className="logo" src="https://img.freepik.com/icones-gratuites/twitter_318-674515.jpg" alt="Twitter logo" />
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram logo" />
                    <img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" />
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/2048px-YouTube_social_white_squircle.svg.png" alt="Youtube logo" />
                </div>

                <div className="contactV">
                    <h3>Visite virtuelle</h3>
                    <h5>
                        Vous avez toujours voulu savoir quoi ressemblent nos plateaux de formation ?
                        Avec nos visites virtuelles 360° HD, plongez en immersion et découvrez plus de 60 plateaux de formation.
                    </h5>

                    <p>Découvrez nos plateaux de formations
                        comme si vous y étiez!
                    </p>
                </div>

                <div className="contactP">
                    <h3>Votre avenir Pro</h3>
                    <p>
                        Etes vous vraiment fait pour ce métier?
                        Avez-vous choisi la bonne formation?
                        L’Afpa vous accompagne dans la construction de votre projet professionnel
                    </p>
                </div> 
            </div>

            <div className="afterfoot">
                <img src="https://www.udes.fr/sites/default/files/public/users/lmorin/logo_synofdes.png" alt="Synofdes logo" />
                <img src="https://www.lapasserelle31.fr/wp-content/uploads/2018/07/logo-europe-engage-france.png" alt="Europe s'engage logo" />
                <img src="https://www.alternance-professionnelle.fr/wp-content/uploads/2020/09/LOGO-AFPA-VERT-PNG.png" alt="Afpa logo" />
                <img src="https://www.quimpercornouaille.bzh/voy_content/uploads/2020/12/logo-1jeune1solution.png" alt="1jeune1solution logo" />
                <img src="https://www.prefectures-regions.gouv.fr/var/ire_site/storage/images/hauts-de-france/region-et-institutions/l-action-de-l-etat-dans-la-region/economie-entreprises-emploi-et-finances-publiques/france-relance-dans-les-hauts-de-france/france-relance-kit-de-communication/france-relance-le-kit-de-communication/logo-nextgenerationeu-en-.png/604555-1-fre-FR/Logo-NextGenerationEU-en-.png.png" alt="Union européenne logo" />
            </div>
        </div>
    )
}