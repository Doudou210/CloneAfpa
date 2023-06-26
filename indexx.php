<?php
session_start();
require_once "index.php";
?>
<?php

    $email = $_POST['email'];
    $password = $_POST['password'];

try {
    $bd = new PDO("mysql:host=localhost;dbname=blog","root", "" );
    $bd ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException) {
    echo "Erreur :" .$e->getMessage();
}


   //Vérifications des données saisies par l'utilisateur

   if ($email!='' && $password!='') {

        //les éléménts à vérifier.
        $request = $bd->prepare("SELECT * FROM user WHERE email=:email AND password=:password");
        $request->execute([
            "email" => $email,
            "password" => $password
        ]);
        //Récuperer les éléments vérifiés 
        $respond =$request -> fetch();

        if (is_array($respond)===true) {
            header("Location: projet 1 1.html"); 
        }else {
            $error_msg = "Email ou Password invalide";
            header("Location: connexion.php ? error{$error_msg}");
        }
   }


?>

<?php

// $first = "";
// $last = "";
// $email="";
// $password = "";

try {
    $bd = new PDO("mysql:host=localhost;dbname=blog","root", "" );
} catch (PDOException) {
    echo "Erreur :" .$e->getMessage();
}


if($_POST){
    $firstname = $_POST['first'];
    $lastname = $_POST['last'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $requete = $bd->prepare("INSERT INTO user(first_name, last_name, email, password) VALUES(:first, :last, :email, :password)");
    $requete ->execute(
        [
            "first"=>$firstname,
            "last"=>$lastname,
            "email"=>$email,
            "password"=>$password,
        ]
        );

}

header("Location:connexion.php");

?>