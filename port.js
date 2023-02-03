function namess() {
    let names = document.getElementById("input").value;
    document.getElementById("name").innerHTML = `<h2 style="display:inline-block">${names}</h2>`;
    document.getElementById("input").classList.add("hide");
}

function display(){
    let welcome = document.getElementById("welcome");
    let mainShow = document.getElementById("mainShow")
    welcome.classList.add("hide")
    mainShow.classList.remove("hide");
}
const timeout = setTimeout(display,2400)

function display2(){
    let skillIntro = document.getElementById("skillIntro");
    let skiImg = document.getElementById("skiImg")
    skillIntro.classList.add("hide")
    skiImg.classList.remove("hide");
}
const timeout2 = setTimeout(display2,10000)