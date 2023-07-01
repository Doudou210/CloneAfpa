<?php 
try {
    $bd = new PDO ("mysql:host=localhost;dbname=blog",'root', '');
} catch (PDOException $e) {
    die('erreur:' . $e -> getMessage());
}
?>