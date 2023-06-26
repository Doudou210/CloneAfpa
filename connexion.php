<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <section>
        <h1>Connexion</h1>
        <form action="indexx.php" method="post">
                <br>
                <hr>
                <br> 

            <label for="">Email</label>
            <input type="text" name="email" placeholder="Email">

            <label for="">Password</label>
            <input type="password" name="password" placeholder="Password">

            <input type="submit" value="Connexion">
            <hr>
            <a href="inscription.php">Inscription</a>

        </form>
    </section>
</body>
</html>

<?php
    $email = $_POST['email'];
    $password = $_POST['password'];

    require "bd.php";


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