function namess() {
    let names = document.getElementById("input").value;
    document.getElementById("name").innerHTML = `<h2 style="display:inline-block">${names}</h2>`;
    document.getElementById("input").classList.add("hide");
}

function projects(element){
    document.getElementById(element).classList.remove("hide")
}

function projectsDel(element){
    document.getElementById(element).classList.add("hide")
}

function pro(element){
    if(element=="law"){
    document.getElementById("calculator1").classList.add("hide");
    document.getElementById("calculator2").classList.add("hide");
    document.getElementById("ecommerce1").classList.add("hide")
    document.getElementById("ecommerce2").classList.add("hide")
}

else if(element=="calc"){
    document.getElementById("law1").classList.add("hide");
    document.getElementById("law2").classList.add("hide");
    document.getElementById("ecommerce1").classList.add("hide")
    document.getElementById("ecommerce2").classList.add("hide")

}

else if(element=="commerce"){
    document.getElementById("law1").classList.add("hide");
    document.getElementById("law2").classList.add("hide");
    document.getElementById("calculator1").classList.add("hide")
    document.getElementById("calculator2").classList.add("hide")


}

}

function proDel(element){
    if (element=="law"){
    document.getElementById("calculator1").classList.remove("hide");
    document.getElementById("calculator2").classList.remove("hide");
    document.getElementById("ecommerce1").classList.remove("hide")
    document.getElementById("ecommerce2").classList.remove("hide")
}

else if(element=="calc"){
    document.getElementById("law1").classList.remove("hide");
    document.getElementById("law2").classList.remove("hide");
    document.getElementById("ecommerce1").classList.remove("hide")
    document.getElementById("ecommerce2").classList.remove("hide")

}

else if(element=="commerce"){
    document.getElementById("law1").classList.remove("hide");
    document.getElementById("law2").classList.remove("hide");
    document.getElementById("calculator1").classList.remove("hide")
    document.getElementById("calculator2").classList.remove("hide")


}



}



