console.log("TP Integrador Ok");

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
seccionTickets = document.getElementById("seccionTickets");
totalPagar = document.getElementById("totalPagar");
resumen = document.getElementById("resumen");
borrar = document.getElementById("borrar");

let val_nombreApellido;
let val_cantidad;
let val_email;
let validacionCantidad=document.getElementById("validacionCantidad");
let validacionNombre=document.getElementById("validacionNombre"); 
let validacionMail=document.getElementById("validacionMail"); 
let validacionCategoria=document.getElementById("validacionCategoria");      
let check_validacion;
let val_completa;

/* ABRIR COMPRAR TICKETS */

comprarTicket1.addEventListener("click",displayTicket);
comprarTicket2.addEventListener("click",displayTicket);

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
        val_cantidad="La cantidad debe ser mayor a 0.";     
       
        validacionCantidad.innerHTML=val_cantidad;
        check_validacion=1;

    } else{
        val_cantidad="";  
        "validacionCantidad".innerHTML=" ";
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
    validacionCantidad.innerHTML="";
    validacionNombre.innerHTML="";
    validacionMail.innerHTML="";
    validacionCategoria.innerHTML="";    
}