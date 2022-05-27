const nombre = document.getElementById("Nombre")



form= addEventListener("submit",e=>{
    if(nombre.nodeValue.length <3){
        alert("Nombre muy corto")
    }
})