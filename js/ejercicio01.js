const calculoTriple=document.getElementById("numero");
calculoTriple.addEventListener("dblclick",triple,false);


function triple(){
    calculoTriple.innerHTML=calculoTriple.innerHTML*3;
}

document.getElementById("numero").onmouseover=function raton(){
    document.getElementById("numero").style.backgroundColor="yellow";
    document.getElementById("numero").style.color="black";

}

document.getElementById("numero").onmouseout=function raton(){
    document.getElementById("numero").style.backgroundColor=null;
    document.getElementById("numero").style.color="white";

}







