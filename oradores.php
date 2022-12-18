<?php
include ("conexion.php");
 $conexion = conexion();

 $sql = "SELECT * FROM oradores";
 $query = mysqli_query($conexion, $sql);

include ("headerHtml.php");
?>
    <div class="table-responsive">
        <table class="table table-striped table-hover m-3">
            <thead>
                    <!-- <th>Id</th> -->
                    <th>Nombre</th>
                    <th>Apellido</th>  
                    <th>Email</th>  
                    <th>Charla</th> 
                    <th>Editar</th> 
                    <th>Eliminar</th>            
            </thead>
            <tbody>
                <?php
                while($fila=mysqli_fetch_assoc($query)){
                    ?>
                    <tr>
                        <!-- <td><?php echo $fila["id"] ?></td> -->
                        <td><?php echo $fila["nombre"] ?></td>
                        <td><?php echo $fila["apellido"] ?></td>
                        <td><?php echo $fila["email"] ?></td>
                        <td><?php echo $fila["charla_titulo"] ?></td>
                        <td><a href="formEditarOrador.php?id=<?php echo $fila["id"]?>"><buton>editar</buton></a></td>
                        <td><a href="eliminarOrador.php?id=<?php echo $fila["id"]?>"><buton>eliminar</buton></a></td>
                        <td></td>
                    </tr>
               <?php } ?>
               
            </tbody>
            </table>
    </div>   

   

<?php
include "footerHtml.php";
?>            