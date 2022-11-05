const primerParrafo=document.getElementById("enlace_1"); 
primerParrafo.addEventListener("click",oculto1,false);

const segundoParrafo=document.getElementById("enlace_2"); 
segundoParrafo.addEventListener("click",oculto2,false);

const tercerParrafo=document.getElementById("enlace_3"); 
tercerParrafo.addEventListener("click",oculto3,false);







function oculto1(){

    let x= document.getElementById("contenidos_1");

    if( x.style.display=="none"){
        x.style.display="block"
    }
    else{
        x.style.display="none"
        document.getElementById("enlace_1").innerHTML="Mostrar contenido";
    }
}


function oculto2(){

    let x= document.getElementById("contenidos_2");

    if( x.style.display=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
        document.getElementById("enlace_2").innerHTML="Mostrar contenido";
    }
}


function oculto3(){

    let x= document.getElementById("contenidos_3");

    if( x.style.display=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
        document.getElementById("enlace_3").innerHTML="Mostrar contenido";
    }
}

