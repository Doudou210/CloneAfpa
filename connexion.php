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