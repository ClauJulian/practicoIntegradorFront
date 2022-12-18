<?php
// echo "<pre>";
// var_dump($_GET);
// echo "</pre>";

include("conexion.php");

$conexion = conexion();

$id = $_GET["id"];

$sql = "SELECT * FROM oradores WHERE id=$id";

$query = mysqli_query($conexion, $sql);
$fila=mysqli_fetch_assoc($query);

include ("headerHtml.php");

?>

<h2>Editar Orador</h2>
    <div>
    <form action="editarOrador.php" method="get">
        <!-- post los encripta -->
        <input type="text" name="id" id="" value="<?php echo $fila["id"]?>" hidden>
        <input type="text" name="nombre" id="" placeholder="" value="<?php echo $fila["nombre"]?>">
        <input type="text" name="apellido" id="" placeholder="" value="<?php echo $fila["apellido"]?>">
        <input type="text" name="email" id="" placeholder="" value="<?php echo $fila["email"]?>">
        <input type="text" name="charla_titulo" id="" placeholder="" value="<?php echo $fila["charla_titulo"]?>">
        
        <input type="submit" value="Modificar">
        </form>
    </div>
     <!-- Validaciones -->
    <div id="validaOradorNombre"><p></p></div>
    <div id="validaOradorMail"><p></p></div>
    <div id="validaOradorTituloCharla"><p></p></div>   

<?php
include "footerHtml.php";
?>