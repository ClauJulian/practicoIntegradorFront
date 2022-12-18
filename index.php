<?php
include ("headerHtml.php");
?>
    <header>
          <!--  Banner -->
          <div class="cj-banner text-end" style="width: 100vw;"><!-- agregué class cj-banner-->
            <a name="confe"></a>
            <div class="cj-navCard card-body" style="height:100vh;">
              <h4 class="card-title">Conf Bs As</h4>
              <p class="card-text">Bs As llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el conocimiento y experincia de los expertos que están creando el futuro de Internet. Ven a conocer a miembros del evento, a otros estudiantes de Codo a Codo y los oradores de primer nivel que tenemos para ti. Te esperamos!</p>
              <div class="btn-group">
                <a href="#" class="cj-btnheader btn active">Quiero ser orador</a>
                <a id="comprarTicket2" href="#tickets" class="cj-btnheader btn">Comprar tickets</a>
              </div>
            </div>
          </div>
          <!-- Fin Banner -->
    </header>
    <main>
        <a name="oradores"></a>
        <div class="cj-oradores">
            <h6>CONOCE A LOS</h6>
            <h3>ORADORES</h3>
        </div>    
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src="img/steve.jpg" class="card-img-top" alt="Jobs">
                <div class="card-body">
                  <p><span class="badge text-bg-warning">Javascript</span>
                    <span class="badge text-bg-info">React</span></p>
                  <h5 class="card-title">Steve Jobs</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="img/bill.jpg" class="card-img-top" alt="Gates">
                <div class="card-body">
                  <p><span class="badge text-bg-warning">Javascript</span>
                    <span class="badge text-bg-info">React</span></p>
                  <h5 class="card-title">Bill Gates</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolores ab blanditiis iure quis? Earum, rem iure distinctio assumenda asperiore.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="img/ada.jpeg" class="card-img-top" alt="Ada">
                <div class="card-body">
                  <p><span class="badge text-bg-secondary">Negocios</span>
                    <span class="badge text-bg-danger">Startups</span></p>
                  <h5 class="card-title">Ada Lovelace</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>        
            </div>
          </div>
    </main>
    <section>
        <a name="lugarFecha"></a>
        <div class="card mb-3" style="width: 100vw;">
            <div class="row g-0">
            <div class="col-md-6">
            <img src="img/honolulu.jpg" class="img-fluid rounded-start" alt="Foto">
            </div>
            <div class="col-md-6 text-light bg-dark opacity-75">
                <div class="card-body">
                <h4 class="card-title">Honolulu - Enero</h4>
                <p class="card-text">Honolulu es la más sureña de entre las principales ciudades estadounidenses. Aunque el nombre de Honolulu se refiere al área urbana en la costa sureste de la isla de Oahu, la ciudad y el condado de Honolulu han formado una ciudad-condado consolidada que cubre toda la ciudad (aproximadamente 600 km2 de superficie).</p>
                
                <p class="card-text"><small><button type="button" class="btn btn-outline-light"><a href="enero23.php" class="link-light">Conoce más</a></button></small></p>
                
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Formulario -->
    <section class="cj-formulario">
        <a name="convertite"></a>
        <div class="card-body text-center">
          <p>CONVERTITE EN UN</p>
          <h2>ORADOR</h2>
          <P>Anotate como orador para dar una <span>charla ignite.</span> Cuéntanos de qué quieres hablar!</P>
        </div>

      <form action="agregarOrador.php" method=GET novalidate>
          <div class="row row-cols-1 row-cols-md-2">
              <div class="col mt-3">
                <input type="text" id="nombreOrador" class="form-control" name="nombre" placeholder="Nombre" aria-label="First name" required>
                <small id="mensaje_nombre"></small>
              </div>
              <div class="col mt-3">
                <input type="text" id="apellidoOrador" class="form-control" name="apellido" placeholder="Apellido" aria-label="Last name">
                <small id="mensaje_apellido"></small>
              </div>        
          </div>
          <div class="mt-3">
              <input type="email" id="mailOrador" class="form-control" name="email" placeholder="Email" aria-label="Email">
              <small id="mensaje_mail"></small>
          </div>
          <div class="mt-3">
            <input id="tituloCharla" class="form-control" name="charla_titulo" id="exampleFormControlTextarea1" rows="3" placeholder="Título de tu charla" aria-label="tituloCharla">
            <small id="mensaje_titulo"></small>
          </div> 
          <div class="d-grid gap-2 mt-3">
            <input id="enviar_orador" class="cj-btnForm btn btn-success" type="submit" value="Enviar">
          </div>
          <div class="d-grid gap-2 mt-3">
            <input id="noEnviar_orador" class="cj-btnNoEnviar btn btn-success" type="" value="Enviar">
          </div>   
      </form>
    </section>
    <!-- Comprar tickets -->
    <section class="cj-tickets"> 
      <a name="tickets"></a> 
      <div id="seccionTickets">
          <div class="card-group text-center mb-3">
            <div class="card border-primary p-3">
              <div class="card-body">
                <h5 class="card-title">Estudiante</h5>
                <p class="card-text">Tiene un descuento</p>
              </div>
                <h5>80%</h5>
                <small class="text-muted">* presentar documentación</small>
            </div>
            <div class="card border-success p-3">
              <div class="card-body">
                <h5 class="card-title">Trainee</h5>
                <p class="card-text">Tiene un descuento</p>
              </div>
                <h5>50%</h5>             
                <small class="text-muted mb-2">* presentar documentación</small>
            </div>
            <div class="card border-danger p-3">
              <div class="card-body">
                <h5 class="card-title">Junior</h5>
                <p class="card-text">Tiene un descuento</p>
              </div>
                <h5>15%</h5>
                <small class="text-muted">* presentar documentación</small>
            </div>          
          </div>

          <div class="card-body text-center">
            <p>VENTA</p>
            <h2>VALOR DE TICKET $200</h2>
          </div>

          <div class="row row-cols-1 row-cols-md-2 mb-3">
              <div class="col mt-3">
              <input id="nombre" type="text" class="form-control" placeholder="Nombre" aria-label="First name">
              </div>
              <div class="col mt-3">
              <input id="apellido" type="text" class="form-control" placeholder="Apellido" aria-label="Last name">
              </div>
          </div>
          <div class="mb-3">
            <input id="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="email" aria-describedby="emailHelp">
          </div>
          <div class="row row-cols-1 row-cols-md-2 mb-3">
            <div class="col mt-3">
              <label>Cantidad</label>
              <input id="cantidad" type="number" class="form-control" placeholder="Cantidad" aria-label="Cantidad">
            </div>
            <div class="col mt-3">
              <label>Categoria</label>
              <select id="categorias" class="form-select" aria-label="Default select example">
                <option value="x" disabled selected>Seleccionar</option>
                <option value="1">Estudiante</option>
                <option value="2">Trainee</option>
                <option value="3">Junior</option>
                <option value="0">Sin Categoría</option>
              </select>
            </div>
            
          </div>  
          <div class="d-grid gap-2">
            <button id="totalPagar" class="cj-btnTickets btn" type="">Total a Pagar $ </button>
          </div>
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mt-3">
            <button id="borrar" type="button" class="cj-btnBorrar btn btn-primary" style="width:100%">Borrar</button>
            </div>
            <div class="col mt-3">
            <button id="resumen" type="button" class="cj-btnBorrar btn btn-secondary" style="width:100%">Resumen</button>
            </div>
          </div>
          <!-- Validaciones -->
          <div id="validacionNombre" ><p></p></div>
          <div id="chequeoCantidad"><p></p></div>
          <div id="validacionMail"><p></p></div>
          <div id="validacionCategoria"><p></p></div>
      </div>
    </section>

<?php
include "footerHtml.php";
?>
    