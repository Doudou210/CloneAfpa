<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="">First</label>
    <input type="text" placeholder="first_name" name="first">
    
    <label for="">Last</label>
    <input type="text" placeholder="last_name" name="last">
    
    <label for="">Last</label>
    <input type="email" placeholder="email" name="email">
    
    <label for="">Last</label>
    <input type="password" placeholder="password" name="password">
    
</body>
</html>
<?php
session_start();

require "bd.php";


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