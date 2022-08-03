function estiloResultado(){
    document.getElementById("muneco").style.display="none";
    document.getElementById("etiqueta").style.display="none";
    document.getElementById("btnCopiar").style.display="unset";
    document.getElementById("mostrar").style.height="305px";
    document.getElementById("mostrar").style.fontSize="20px";
    document.getElementById("texto-ingresado").value = ""; 
}
var expresion = /[^a-zA-Z\s\u00f1\u00d1]+/g;

//FUNCION ENCRIPTAR
var botonEncriptar = document.querySelector("#btnEnc");

botonEncriptar.addEventListener("click",function(encriptar){
    encriptar.preventDefault()

    let mensaje = document.querySelector("#texto-ingresado").value;
    if(expresion.test(mensaje)){
        alert("Sólo letras, sin acentos ni caracteres especiales");
    }
    
    else{
        let mensajeEncriptado = mensaje.toLowerCase() 
            .replaceAll("e","enter")
            .replaceAll("o","ober")
            .replaceAll("i","imes")
            .replaceAll("a","ai")
            .replaceAll("u","ufat");
        estiloResultado()
        document.querySelector("#mostrar").innerHTML = mensajeEncriptado;
    }
})


//FUNCION DESENCRIPTAR

var botonDesencriptar=document.querySelector("#btnDes");

botonDesencriptar.addEventListener("click",function(desencriptar){
    desencriptar.preventDefault()
    
    let mensajeEncriptado = document.querySelector("#texto-ingresado").value;
    if(expresion.test(mensajeEncriptado)){
        alert("Sólo letras, sin acentos ni caracteres especiales")
    }
    else{
        let mensaje = mensajeEncriptado.toLowerCase()
            .replaceAll("enter","e")
            .replaceAll("ober","o")
            .replaceAll("imes","i")
            .replaceAll("ai","a")
            .replaceAll("ufat","u");
        estiloResultado()
        document.querySelector("#mostrar").innerHTML = mensaje;
    }    
})

//FUNCION COPIAR

var botonCopiar=document.querySelector("#btnCopiar");
botonCopiar.addEventListener("click",function(copiar){
    copiar.preventDefault()

    var resultado = document.querySelector("#mostrar");
    resultado.select();
    document.execCommand("copy");
    alert("Mensaje copiado!")
})


    