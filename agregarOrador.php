<?php
// echo "<pre>";
// var_dump($_GET);
// echo "</pre>";

include("conexion.php");

$conexion = conexion();

$nombre = $_GET["nombre"];
$apellido = $_GET["apellido"];
$email = $_GET["email"];
$charla_titulo = $_GET["charla_titulo"];


$sql = "INSERT INTO oradores VALUES (NULL, '$nombre','$apellido','$email','$charla_titulo')";

$query = mysqli_query($conexion, $sql);

if($query){
    Header("Location: index.php#convertite");
}
?>