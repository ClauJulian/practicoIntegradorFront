<?php
// echo "<pre>";
// var_dump($_GET);
// echo "</pre>";

include("conexion.php");

$conexion = conexion();

$id = $_GET["id"];
$nombre = $_GET["nombre"];
$apellido = $_GET["apellido"];
$email = $_GET["email"];
$charla_titulo = $_GET["charla_titulo"];

$sql = "UPDATE oradores SET nombre='$nombre', apellido ='$apellido', email ='$email', charla_titulo = '$charla_titulo' WHERE id=$id";

$query = mysqli_query($conexion, $sql);



if($query) {
    Header("Location: oradores.php");
}