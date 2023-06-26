<?php 
try {
    $bd= new mysqli("hostname", 'root', '' , 'blog');
} catch (PDOException $e) {
    die('erreur:' . $e -> getMessage());
}
?>