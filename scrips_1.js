console.log("NUEVO SCRIPS");

let comprarTicket1;
let comprarTicket2;
let seccionTickets;
let categorias = ["estudiante","trainee","junior"];
let opCategoria;
let descuento= [0.80 , 0.50 , 0.15, 0];
let opDescuento;
let precio = 200;
let totalPagar;

const apellido=document.getElementById("apellido");
const nombre=document.getElementById("nombre");
const email=document.getElementById("email");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const cantidad=document.getElementById("cantidad");

let resumen;
let borrar;

comprarTicket1 = document.getElementById("comprarTicket1");
comprarTicket2 = document.getElementById("comprarTicket2");
// comprarTicket3 = document.getElementById("comprarTicket3");

seccionTickets = document.getElementById("seccionTickets");
totalPagar = document.getElementById("totalPagar");
resumen = document.getElementById("resumen");
borrar = document.getElementById("borrar");

let val_nombreApellido;
let val_cantidad;
let val_email;
// let validacionCantidad=document.getElementById("validacionCantidad");
let chequeoCantidad=document.getElementById("chequeoCantidad"); 
let validacionNombre=document.getElementById("validacionNombre"); 
let validacionMail=document.getElementById("validacionMail"); 
let validacionCategoria=document.getElementById("validacionCategoria");      
let check_validacion;
let val_completa;

/* ABRIR COMPRAR TICKETS */

comprarTicket1.addEventListener("click",displayTicket);
comprarTicket2.addEventListener("click",displayTicket);
// comprarTicket3.addEventListener("click",displayTicket);

function displayTicket() {
    seccionTickets.style.display="inline-block";    
}

/* VALIDACION DE DATOS DE COMPRAR TICKETS */

resumen.addEventListener("click",validarMostrar);

function validarMostrar(){
    val_completa=0;
    validarCantidad();
    validarCategoria();
    validarMail();
    validarNombre();

    if(check_validacion == 0 && val_completa == 4){
        monto();
        
    }else{
        console.log(check_validacion);
        console.log(val_completa);
    }
}

function monto(){
    montoTotal=precio*(1-opDescuento) * cantidad.value;
    totalPagar.innerHTML="Total a Pagar: $" + montoTotal.toFixed(0);
}

function validarNombre(){
let inputApellido = apellido.value;
let inputNombre = nombre.value; 

lengthNombre = inputNombre.length;
lengthApellido = inputApellido.length;    

if(lengthNombre <= 3 || lengthApellido <= 3 ){
    val_nombreApellido = "El nombre y el apellido debe tener más de 3 letras.";
    validacionNombre.innerHTML=val_nombreApellido;
    check_validacion=1;
   
}else{
    val_nombreApellido="";
    validacionNombre.innerHTML=val_nombreApellido;
    check_validacion=0;
    val_completa++;
}

}    

function validarMail(){
if(!expRegular.test(email.value)){

validacionMail.innerHTML="Falta mail o mail no válido";
check_validacion=1;
}else{
    validacionMail.innerHTML=""; 
    check_validacion=0;
    val_completa++;
}
}

function validarCantidad(){
    let inputCantidad = cantidad.value; 
    if(inputCantidad <= 0){                    
        chequeoCantidad.innerHTML="La cantidad debe ser mayor a 0.";
        check_validacion=1;
    } else{
        chequeoCantidad.innerHTML="";
        check_validacion=0;
        val_completa++;
    }
}

function validarCategoria(){
    opCategoria= document.getElementById("categorias").value;
    if(opCategoria=="x"){
        validacionCategoria.innerHTML="Falta seleccionar Categoría"; 
        check_validacion=1;
    }else{
    switch(opCategoria){
                case "1":
                    opDescuento=descuento[0];
                    break;
                case "2":
                    opDescuento=descuento[1];
                    break;
                case "3":
                    opDescuento=descuento[2];
                    break;
                case "0":
                    opDescuento=descuento[3];
                    break;
                default:
                    console.log("ups");    
            }            
    validacionCategoria.innerHTML=""; 
    check_validacion=0;
    val_completa++;
    }
    console.log(check_validacion);
}
/* BORRAR CAMPOS */

borrar.addEventListener("click",borrarCampos);

function borrarCampos(){
    
    nombre.value="";
    apellido.value="";
    email.value="";
    cantidad.value="";
    document.getElementById("categorias").value="x";
    totalPagar.innerHTML="Total a Pagar: $";

    val_completa=0;
    chequeoCantidad.innerHTML="";
    validacionNombre.innerHTML="";
    validacionMail.innerHTML="";
    validacionCategoria.innerHTML="";    
}

/* VALIDACION DATOS ORADOR */

const apellidoOrador=document.getElementById("apellidoOrador");
const nombreOrador=document.getElementById("nombreOrador");
const mailOrador=document.getElementById("mailOrador");
const tituloCharla=document.getElementById("tituloCharla");
let enviar = document.getElementById("enviar_orador");
let noEnviar = document.getElementById("noEnviar_orador");

let mensaje_nombre=document.getElementById("mensaje_nombre");
let mensaje_apellido=document.getElementById("mensaje_apellido"); 
let mensaje_mail=document.getElementById("mensaje_mail"); 
let mensaje_titulo=document.getElementById("mensaje_titulo"); 
let check_validacion_orador;

let check_orador_completa;
check_orador_completa=0;

nombreOrador.addEventListener("change",checkNombreOrador);
apellidoOrador.addEventListener("change",checkApellidoOrador);
mailOrador.addEventListener("change",checkMailOrador);
tituloCharla.addEventListener("change",checkTituloCharla);

function checkNombreOrador(){
    console.log("validando nombre");
    let inputNombreOrador = nombreOrador.value; 
    lengthNombreOrador = inputNombreOrador.length;
   
    if(lengthNombreOrador <= 3){
        mensaje_nombre.innerHTML="Este campo debe tener más de 3 letras.";
        check_validacion_orador=1;
        enviar.style.display="none";
        noEnviar.style.display="block";
    }else{    
        mensaje_nombre.innerHTML="";
        check_validacion_orador=0;
        check_orador_completa++;
        if (check_orador_completa>3 && check_validacion_orador==0){
            noEnviar.style.display="none";
            enviar.style.display="block";
        }else{
            console.log("Faltan datos");
            enviar.style.display="none";
        }
}
}

function checkApellidoOrador(){
    console.log("validando apellido");
    let inputApellidoOrador = apellidoOrador.value; 
    lengthApellidoOrador = inputApellidoOrador.length;
   
    if(lengthApellidoOrador <= 3){
        mensaje_apellido.innerHTML="Este campo debe tener más de 3 letras.";
        check_validacion_orador=1;
        enviar.style.display="none";
        noEnviar.style.display="block";
    }else{
        mensaje_apellido.innerHTML="";
        check_validacion_orador=0;
        check_orador_completa++;
        if (check_orador_completa>3 && check_validacion_orador==0){
            noEnviar.style.display="none";
            enviar.style.display="block";
        }else{
            console.log("Faltan datos");
            enviar.style.display="none";
    }
}
}

function checkMailOrador(){
    if(!expRegular.test(mailOrador.value)){
        mensaje_mail.innerHTML="Mail no válido";
        check_validacion_orador=1;
        enviar.style.display="none";
        noEnviar.style.display="block";
    }else{
        mensaje_mail.innerHTML=""; 
        check_validacion_orador=0;
        check_orador_completa++;
        console.log(check_orador_completa && check_validacion_orador==0);
        if (check_orador_completa>3){
            noEnviar.style.display="none";
            enviar.style.display="block";
        }else{
            console.log("Faltan datos");
            enviar.style.display="none";
        }
    }
    }

function checkTituloCharla(){
        console.log("validando titulo charla");
        let inputTituloCharla = tituloCharla.value; 
        lengthTituloCharla = inputTituloCharla.length;
       
        if(lengthTituloCharla < 6){
            mensaje_titulo.innerHTML="Este campo debe tener más de 5 letras.";
            check_validacion_orador=1;
            enviar.style.display="none";
            noEnviar.style.display="block";
        }else{
            mensaje_titulo.innerHTML="";
            check_validacion_orador=0;
            check_orador_completa++;
            console.log(check_orador_completa);
            if (check_orador_completa>3 && check_validacion_orador==0){
                noEnviar.style.display="none";
                enviar.style.display="block";
            }else{
                console.log("Faltan datos");
                enviar.style.display="none";
            }
    }
    }
